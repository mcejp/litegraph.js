class PresetManager {
    /**
     * 
     * @param {LiteGraph} graph 
     */
    constructor(graph) {
        this.graph = graph;

        // default preset
        this.currentPresetName = "Default";

        this.allPresetData = {};
    }

    copyPreset(from, to) {
        this.allPresetData[to] = this.allPresetData[from];
    }

    flushEdits() {
        // console.log(this);
        const presetData = {};

        /** @type {LGraphNode} node */
        for (const node of this.graph._nodes) {
            const nodeData = {};

            // in general: compare with parent preset; in our case only parent is Default
            const reference = (this.currentPresetName != "Default") ? this.allPresetData["Default"][node.id] : null;

            for (const [name, value] of Object.entries(node.properties)) {
                // console.log(node.id, name, value);

                if (!reference || value !== reference[name]) {
                    nodeData[name] = value;
                }
            }

            if (Object.keys(nodeData).length > 0) {
                presetData[node.id] = nodeData;
            }
        }

        this.allPresetData[this.currentPresetName] = presetData;
    }

    loadParamsForPreset(name) {
        const presetData = this.allPresetData[name];

        /** @type {LGraphNode} node */
        for (const node of this.graph._nodes) {
            const nodeData = presetData[node.id];

            for (const [name, _] of Object.entries(node.properties)) {
                // console.log(node.id, name, value);
                node.setProperty(name, nodeData[name]);
            }
        }
    }

    loadPresetsFrom(data) { // (or use `graph.extra`?)
        this.allPresetData = data.allPresetData;
        this.currentPresetName = data.currentPresetName;

        // migrations

        if (this.allPresetData === undefined) {
            this.allPresetData = {};
        }

        if (this.currentPresetName === undefined) {
            this.currentPresetName = "Default";
        }
    }

    savePresetAs(name) {
        // update it
        this.flushEdits();

        // clone it
        this.copyPreset(this.currentPresetName, name);

        // select it
        //this.loadParamsForPreset(name); -- why bother?
        this.currentPresetName = name;
    }

    selectPreset(name) {
        this.flushEdits();

        this.loadParamsForPreset(name);
        this.currentPresetName = name;
    }

    serializeTo(data) {
        this.flushEdits();

        data.allPresetData = this.allPresetData;
        data.currentPresetName = this.currentPresetName;
    }
}

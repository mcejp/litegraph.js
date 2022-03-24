var webgl_canvas = null;

LiteGraph.node_images_path = "../nodes_data/";

var editor = new LiteGraph.Editor("main",{miniwindow:false});
window.graphcanvas = editor.graphcanvas;
window.graph = editor.graph;
window.addEventListener("resize", function() { editor.graphcanvas.resize(); } );
//window.addEventListener("keydown", editor.graphcanvas.processKey.bind(editor.graphcanvas) );
window.onbeforeunload = function(){
	var data = JSON.stringify( graph.serialize() );
	localStorage.setItem("litegraphg demo backup", data );
}
const presetManager = new PresetManager(editor.graph);

//enable scripting
LiteGraph.allow_scripts = true;
editor.graph.config.align_to_grid = true;

//test
//editor.graphcanvas.viewport = [200,200,400,400];

//create scene selector
var elem = document.createElement("span");
elem.id = "LGEditorTopBarSelector";
elem.className = "selector";
elem.innerHTML = "";
elem.innerHTML += "Demo <select id='demos'><option>Empty</option></select> <button class='btn' id='save'>Save</button><button class='btn' id='load'>Load</button><button class='btn' id='download'>Download</button> | <button class='btn' id='webgl'>WebGL</button> <button class='btn' id='multiview'>Multiview</button> | <select id='preset'><option>Default</option><option>Save as...</option></select>";
editor.tools.appendChild(elem);
var select = elem.querySelector("#demos");
const presetSelect = elem.querySelector("#preset");
select.addEventListener("change", function(e){
	var option = this.options[this.selectedIndex];
	var url = option.dataset["url"];
	
	if(url) {
		graph.onConfigure = (data) => {
			presetManager.loadPresetsFrom(data)

			// remove what there is
			presetSelect.replaceChildren();

			for (const name of Object.keys(presetManager.allPresetData)) {
				const option = document.createElement("option");
				option.innerHTML = name;
				presetSelect.appendChild( option );

				if (name === presetManager.currentPresetName) {
					presetSelect.selectedIndex = presetSelect.childElementCount - 1;
				}
			}

			// re-add "Save as"
			var option = document.createElement("option");
			option.innerHTML = "Save as...";
			presetSelect.appendChild( option );

			editor.graph.config.align_to_grid = true;
		};
		graph.load( url );
	}
	else if(option.callback)
		option.callback();
	else
		graph.clear();
});

elem.querySelector("#save").addEventListener("click",function(){
	console.log("saved");
	localStorage.setItem( "graphdemo_save", JSON.stringify( graph.serialize() ) );
});

elem.querySelector("#load").addEventListener("click",function(){
	var data = localStorage.getItem( "graphdemo_save" );
	if(data)
		graph.configure( JSON.parse( data ) );
	console.log("loaded");
});

elem.querySelector("#download").addEventListener("click",function(){
	const ser = graph.serialize();
	presetManager.serializeTo(ser);
	var data = JSON.stringify( ser );
	var file = new Blob( [ data ] );
	var url = URL.createObjectURL( file );
	var element = document.createElement("a");
	element.setAttribute('href', url);
	element.setAttribute('download', "graph.JSON" );
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
	setTimeout( function(){ URL.revokeObjectURL( url ); }, 1000*60 ); //wait one minute to revoke url	
});

elem.querySelector("#webgl").addEventListener("click", enableWebGL );
elem.querySelector("#multiview").addEventListener("click", function(){ editor.addMultiview()  } );

presetSelect.addEventListener("change", function(e){
	var option = this.options[this.selectedIndex];
	// var url = option.dataset["url"];
	
	// console.log(option.innerText);
	if (option.innerText === "Save as...") {
		const saveAs = window.prompt("New preset name:");

		// console.log(saveAs)
		presetManager.savePresetAs(saveAs)

		var option = document.createElement("option");
		option.innerHTML = saveAs;
		presetSelect.appendChild( option );

		presetSelect.selectedIndex = presetSelect.childElementCount - 1;
	}
	else {
		presetManager.selectPreset(option.innerText);
	}

	editor.graph.setDirtyCanvas(true);

	// if(url)
	// 	graph.load( url );
	// else if(option.callback)
	// 	option.callback();
	// else
	// 	graph.clear();
});

function addDemo( name, url )
{
	var option = document.createElement("option");
	if(url.constructor === String)
		option.dataset["url"] = url;
	else
		option.callback = url;
	option.innerHTML = name;
	select.appendChild( option );
}

//some examples
addDemo("Hexland", "examples/hexland.json");
addDemo("Symbolgen", "examples/symbolgen.json");
addDemo("Features", "examples/features.json");
addDemo("Benchmark", "examples/benchmark.json");
addDemo("Subgraph", "examples/subgraph.json");
addDemo("Audio", "examples/audio.json");
addDemo("Audio Delay", "examples/audio_delay.json");
addDemo("Audio Reverb", "examples/audio_reverb.json");
addDemo("MIDI Generation", "examples/midi_generation.json");
addDemo("autobackup", function(){
	var data = localStorage.getItem("litegraphg demo backup");
	if(!data)
		return;
	var graph_data = JSON.parse(data);
	graph.configure( graph_data );
});

//allows to use the WebGL nodes like textures
function enableWebGL()
{
	if( webgl_canvas )
	{
		webgl_canvas.style.display = (webgl_canvas.style.display == "none" ? "block" : "none");
		return;
	}

	var libs = [
		"js/libs/gl-matrix-min.js",
		"js/libs/litegl.js",
		"../src/nodes/gltextures.js",
		"../src/nodes/glfx.js",
		"../src/nodes/glshaders.js",
		"../src/nodes/geometry.js"
	];

	function fetchJS()
	{
		if(libs.length == 0)
			return on_ready();

		var script = null;
		script = document.createElement("script");
		script.onload = fetchJS;
		script.src = libs.shift();
		document.head.appendChild(script);
	}

	fetchJS();

	function on_ready()
	{
		console.log(this.src);
		if(!window.GL)
			return;
		webgl_canvas = document.createElement("canvas");
		webgl_canvas.width = 400;
		webgl_canvas.height = 300;
		webgl_canvas.style.position = "absolute";
		webgl_canvas.style.top = "0px";
		webgl_canvas.style.right = "0px";
		webgl_canvas.style.border = "1px solid #AAA";

		webgl_canvas.addEventListener("click", function(){
			var rect = webgl_canvas.parentNode.getBoundingClientRect();
			if( webgl_canvas.width != rect.width )
			{
				webgl_canvas.width = rect.width;
				webgl_canvas.height = rect.height;
			}
			else
			{
				webgl_canvas.width = 400;
				webgl_canvas.height = 300;
			}
		});

		var parent = document.querySelector(".editor-area");
		parent.appendChild( webgl_canvas );
		var gl = GL.create({ canvas: webgl_canvas });
		if(!gl)
			return;

		editor.graph.onBeforeStep = ondraw;

		console.log("webgl ready");
		function ondraw ()
		{
			gl.clearColor(0,0,0,0);
			gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
			gl.viewport(0,0,gl.canvas.width, gl.canvas.height );
		}
	}
}
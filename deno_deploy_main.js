
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

var s_html = `<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>hextovec3</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div id="main"></div>
        <script type='module'>import {f_o_html_from_o_js} from "https://deno.land/x/f_o_html_from_o_js@0.7/mod.js";

class O_image { 
    constructor(
        s_url = '', 
        n_trn_x = 0, 
        n_trn_y = 0, 
        n_scl = 0, 
        n_scl_x = 0, 
        n_scl_y = 0, 
        n_rot = 0, 
        n_rot_x = 0, 
        n_rot_y = 0, 
        n_rot_z = 0,
    ){
        this.s_url = s_url; 
        this.n_trn_x = n_trn_x; 
        this.n_trn_y = n_trn_y; 
        this.n_scl = n_scl; 
        this.n_scl_x = n_scl_x; 
        this.n_scl_y = n_scl_y; 
        this.n_rot = n_rot; 
        this.n_rot_x = n_rot_x; 
        this.n_rot_y = n_rot_y; 
        this.n_rot_z = n_rot_z;
    }
}
var o_data = {
    b_display_gui: true, 
    n_trn_x_nor_slider: .5, 
    a_o_image: [
        new O_image(
            "https://codyhouse.co/demo/image-comparison-slider/img/img-modified.jpg",
            //'./img-modified.jpg'
            ),
        new O_image(
            "https://codyhouse.co/demo/image-comparison-slider/img/img-original.jpg",
            //'./img-original.jpg'
            ),
    ]
};

let f_a_o_js_input__from_a_s_prop_name = function(
    a_s_prop_name, 
    o_js_to_render, 
    o_with_props,
    ){
    return a_s_prop_name.map(
        function(s_prop_name){
            return {
                a_o: [
                    {
                        s_tag: "label", 
                        innerText: s_prop_name
                    },
                    {
                        s_tag: "input",
                        type: 'range', 
                        min: -1, 
                        max: 1, 
                        value: o_with_props[s_prop_name],
                        step: 0.01,
                        oninput: function(){
                            console.log(this.value)
                            o_with_props[s_prop_name] = this.value;
                            o_js_to_render._f_render()
                        }
                    }
                ]
            }
        }
    )
}

let o_js__a_o_image_2 = {}
let o_js__a_o_image = {};
o_js__a_o_image = {
    f_o_js: function(){
        return {
            style: [
                'position: relative', 
                'display: flex',
                'flex-direction: row',
                'height: 100vh',
                \`display: \${((o_data.b_display_gui) ? 'flex' : 'none')}\`
            ].join(";"),
            a_o: [
                ...o_data.a_o_image.map(
                    function(o_image){
                        return {
                            style: [
                                'flex: 1 1 auto', 
                                'position: relative', 
                                'height: 100%'
                            ].join(";"),
                            a_o:[
                                {
                                    s_tag: "input", 
                                    type: 'file', 
                                    onchange: function(){
                                        console.log(this.files)
                                        o_image.s_url = URL.createObjectURL(this.files[0]);
                                        o_js__a_o_image._f_render();
                                        o_js__a_o_image_2._f_render();
                                        console.log(o_js__a_o_image_2)
                                    }
                                }, 
                                ...f_a_o_js_input__from_a_s_prop_name(
                                    [
                                        "n_trn_x", 
                                        "n_trn_y", 
                                        "n_scl", 
                                        "n_rot", 
                                    ],
                                    o_js__a_o_image_2, 
                                    o_image
                                )
                            ]
                        }
                    }
                ), 
                

            ]
        }
        // var url = URL.createObjectURL(this.files[0]);
        // document.body.style.background = "url(" + url + ") no-repeat";

    }
}
o_js__a_o_image_2 = {
    f_o_js: function(){
        console.log(o_data.b_display_gui)
        return {
            style: [
                'position: absolute', 
                'left: 0', 
                'top: 0', 
                'width: 100%', 
                'height: 100%', 
                'z-index:-1',
                // \`display: \${((o_data.b_display_gui) ? 'block' : 'none')}\`
            ].join(";"),
            a_o: [
                ...o_data.a_o_image.map(
                function(
                    o_image, 
                    n_idx
                    ){
                    
                    var s_css__clip_path = \`clip-path: polygon(0 0, \${o_data.n_trn_x_nor_slider * 100}% 0, \${o_data.n_trn_x_nor_slider * 100}% 100%, 0% 100%);\`;
                    if(n_idx > 0){
                        s_css__clip_path = \`clip-path: polygon(\${o_data.n_trn_x_nor_slider * 100}% 0, 100% 0, 100% 100%, \${o_data.n_trn_x_nor_slider * 100}% 100%);\`;
                    }
                    // console.log(o_image)
                    return {
                        a_o: [
                            {
                                style: [
                                    s_css__clip_path, 
                                    'position: absolute', 
                                    'left: 0', 
                                    'top: 0', 
                                    'width: 100%', 
                                    'height: 100%', 
                                ].join(";"),
                                a_o: [
                                    {
                                        style: [
                                            'height: 100%',  
                                            \`background: url(\${o_image.s_url}) no-repeat\`, 
                                            \`background-position: \${o_image.n_trn_x*100}% \${o_image.n_trn_y*100}%\`,
                                            \`background-size:  \${100+(o_image.n_scl*100)}%\`,
                                            \`transform: rotate(\${(o_image.n_rot*360)}deg);\`,
                                            'position: absolute', 
                                            'left: 0', 
                                            'top: 0',
                                            'width: 100%', 
                                            'height: 100%', 
                                            'z-index:-1'
                                        ].join(";"),
                                    }
                                ]
                            }, 
                        ]
                    }
                }
            ),
            ]

        }
    }
}


var o_js = {
    class: 'main',
    style: [
        'position: relative', 
    ].join(";"),
    a_o: [
        o_js__a_o_image, 
        o_js__a_o_image_2,
        {
            s_tag: 'input',
            class: 'range', 
            type: "range", 
            min: 0, 
            max: 1., 
            step: 0.01, 
            value: o_data.n_trn_x_nor_slider,
            oninput: function(){
                
                o_data.n_trn_x_nor_slider = this.value
                o_js__a_o_image_2._f_render();
            }, 
            style: [
                "position: absolute;",
                "top: 50%;",
                "left: 0;",
            ].join(";")
        }, 
        {
            style: [
                "position: absolute;",
                "bottom: 0;",
                "left: 0;",
            ].join(";"),
            s_tag: "button",
            innerText: 'Toggle GUI',  
            onclick: function(){
                o_data.b_display_gui = ! o_data.b_display_gui
                // o_js__a_o_image_2._f_render();
                o_js__a_o_image._f_render();
                
            }
        }
    ]
}

let f_add_css = function(
    o_document,
    s_path_file,
    s_css
){
    let o_el = null;
    if(s_css){
        var o_el_style = o_document.createElement("style")
        o_el_style.innerText = s_css
        o_el = o_el_style
    }else{
        o_el = o_document.createElement("link");
        o_el.rel = "stylesheet"
        o_el.href = s_path_file
        // <link rel="stylesheet" href="mystyle.css">
    }

    o_document.head.appendChild(o_el)

}

f_add_css(
    document, 
    // './pico.min.css', 
    'https://unpkg.com/@picocss/pico@1.*/css/pico.min.css'
)
f_add_css(
    document, 
    \`\`,
    \`
    *{
        margin:0;
        padding:0;
    }
    #main, .main{
        min-height: 100vh;
        min-width: 100vw;
    }
    input.range[type=range]::-webkit-slider-runnable-track {
        background:transparent;
        }
    \`   
)
var o_html = f_o_html_from_o_js(o_js);
var o_div_main = document.querySelector("#main");
o_div_main.appendChild(o_html)
</script>
    </body>
</html>`

serve(
    function(req){
        return new Response(
            s_html, 
            {
                status: 200,
                headers: {
                    "content-type": "text/html",
                },
            }
        )
    }
)

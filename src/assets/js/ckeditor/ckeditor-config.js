/*(function(){
    CKEDITOR.basePath = '/assets/js/ckeditor/'
    CKEDITOR.plugins.addExternal('wordcount', 'plugins/wordcount/');
    CKEDITOR.plugins.addExternal('notification', 'plugins/notification/');
    //CKEDITOR.plugins.addExternal('ckeditor_wiris', 'plugins/ckeditor_wiris/', 'plugin.js');
    CKEDITOR.plugins.addExternal('office2013', 'skins/office2013/','skins/office2013/icons', 'skin.js');
    CKEDITOR.editorConfig = function( config ) {

        config.placeholder_select= {
            placeholders: ['expediente', 'expediente.documentos', 'expediente.solicitante'],
            format: '${%placeholder%}'
        }

        // Configure available tokens
        config.availableTokens = [
	        ["", ""],
	        ["Expediente sancionador 45846069P/20122019/01.","expediente"],
	        ["Interesado del expediente: José Ángel Rey Liñares","interesado"],
	        ["Documentos del expediente actual","expediente.documentos"]
        ];

        // Configure token string
        config.tokenStart = '${';
        config.tokenEnd = '}';

        config.extraPlugins = 'colordialog,tableresize,wordcount,notification,placeholder_select,token,table,tableselection,tabletools,pastetext,colordialog,tableresize';
        config.language = 'gl';
        config.height = 286;
        //Permitir contenido variable en el html para poder alterar divisiones con el markup definido para las marcas de bucles y condicionales.
        config.allowedContent = true;
	    config.toolbarGroups = [
		    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		    { name: 'forms', groups: [ 'forms' ] },
		    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		    { name: 'links', groups: [ 'links' ] },
		    { name: 'insert', groups: [ 'insert' ] },
		    '/',
		    { name: 'styles', groups: [ 'styles' ] },
		    { name: 'colors', groups: [ 'colors' ] },
		    { name: 'tools', groups: [ 'tools' ] },
            { name: 'others', groups: [ 'others' ] },
            { name: 'color', groups: ['tabletools, colordialog']}
        ];
	    config.skin = 'office2013';

	    //config.removeButtons = 'Image,Flash,Smiley,SpecialChar,Iframe,Link,Unlink,Anchor,Language,BidiRtl,BidiLtr,Blockquote,CreateDiv,Indent,Outdent,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Templates,Save,Print,Source,Maximize';
    }

})();*/

/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
    CKEDITOR.basePath = '/assets/js/ckeditor/';
	config.language = 'gl';
    config.height = 286;
    config.skin = 'office2013';
    CKEDITOR.plugins.addExternal('office2013', 'skins/office2013/','skins/office2013/icons', 'skin.js');

    
    config.placeholder_select= {
        placeholders: ['expediente', 'expediente.documentos', 'expediente.solicitante'],
        format: '${%placeholder%}'
    }

    // Configure available tokens
    config.availableTokens = [
        ["", ""],
        ["Expediente sancionador 45846069P/20122019/01.","expediente"],
        ["Interesado del expediente: José Ángel Rey Liñares","interesado"],
        ["Documentos del expediente actual","expediente.documentos"]
    ];

    // Configure token string
    config.tokenStart = '${';
    config.tokenEnd = '}';

    config.allowesContent = true;

    config.extraPlugins = 'placeholder_select,token,a11yhelp,about,basicstyles,bidi,blockquote,clipboard,colorbutton,colordialog,contextmenu,copyformatting,dialogadvtab,div,elementspath,enterkey,entities,filebrowser,find,flash,floatingspace,font,format,forms,horizontalrule,htmlwriter,iframe,image,indentblock,indentlist,justify,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastefromword,pastetext,pastetools,preview,print,removeformat,resize,save,scayt,selectall,showblocks,showborders,smiley,sourcearea,specialchar,stylescombo,tab,table,tableselection,tabletools,templates,toolbar,undo,uploadimage,wordcount,wsc,wysiwygarea,tableresize,tabletools';
    //Eliminados de momento zoom, footnotes

	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] }
	];

	config.removeButtons = 'Image,Flash,Smiley,SpecialChar,Iframe,Link,Unlink,Anchor,Language,BidiRtl,BidiLtr,Blockquote,CreateDiv,Indent,Outdent,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Templates,Save,Print,Source,Maximize';
};


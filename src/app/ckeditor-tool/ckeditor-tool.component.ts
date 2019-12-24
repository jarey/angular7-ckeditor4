import {
  Component,
  OnInit,
  ViewChild, ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CKINPUT } from './mock-ckeditorData';
import {CkeditorConfigService} from '../services/internal/ckeditor-config.service';
declare var CKEDITOR: any;

@Component({
  selector: 'app-ckeditor-tool',
  templateUrl: './ckeditor-tool.component.html',
  styleUrls: ['./ckeditor-tool.component.scss'],
  providers: [
    CkeditorConfigService
  ]
})
export class CkeditorToolComponent implements OnInit {
  // @ViewChild('editor') public editorRef: ElementRef;

  public model: any = {
    editorData: '<p>Hello, world!</p>'
  };

  public instance: any;
  mathElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'annotation',
    'annotation-xml'
  ];
  public myCkeditorConfig: any;
  public ckeditorContent;
  public editor;
  constructor(private cd: ChangeDetectorRef, private ckService: CkeditorConfigService) { 
  }

  ngOnInit() {
    // CKEDITOR.basePath = '/assets/js/ckeditor/';
    this.ckeditorContent = "<p>My content</p>"
    this.myCkeditorConfig = this.ckService.getConfig(150, 400);
  }

  public onChange(event: any) {
  }

  public onReady(event) {

    CKEDITOR.on( 'currentInstance', function() {
      this.editor = CKEDITOR.currentInstance;
  } );

      CKEDITOR.on('instanceReady' , () => {
        console.log('Instance Ready');

      });

      CKEDITOR.on('loaded' , () => {
        console.log('Loaded Ready');
      });

  }
}

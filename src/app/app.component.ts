// app.component.ts

import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontFamily, FontSize } from '@ckeditor/ckeditor5-font';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )

export class AppComponent {
 public Editor = ClassicEditor;
config = {
    toolbar: {
      items: [
        'heading', '|',
        'fontfamily', 'fontsize',
        'alignment',
        //'fontColor', 'fontBackgroundColor', '|',
        'bold', 'italic', 'strikethrough', 'underline', 
        //'subscript', 'superscript', '|',
        // 'link', '|',
        // 'outdent', 'indent', '|',
        // 'bulletedList', '-', 'numberedList', 'todoList', '|',
        // 'code', 'codeBlock', '|',
        // 'insertTable', '|',
        // 'imageUpload', 'blockQuote', '|',
        // 'todoList'
        // ,
        'undo', 'redo',
      ],
      shouldNotGroupWhenFull: true,
      //plugins: [ FontFamily, FontSize ],
    },

    // image: {
    //   // Configure the available styles.
    //   styles: [
    //     'alignLeft', 'alignCenter', 'alignRight'
    //   ],

    //   // Configure the available image resize options.
    //   resizeOptions: [
    //     {
    //       name: 'resizeImage:original',
    //       label: 'Original',
    //       value: null
    //     },
    //     {
    //       name: 'resizeImage:50',
    //       label: '25%',
    //       value: '25'
    //     },
    //     {
    //       name: 'resizeImage:50',
    //       label: '50%',
    //       value: '50'
    //     },
    //     {
    //       name: 'resizeImage:75',
    //       label: '75%',
    //       value: '75'
    //     }
    //   ],

      // You need to configure the image toolbar, too, so it shows the new style
      // buttons as well as the resize buttons.
      // toolbar: [
      //   'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
      //   '|',
      //   'ImageResize',
      //   '|',
      //   'imageTextAlternative'
      // ]
    //},
    // simpleUpload: {
    //    The URL that the images are uploaded to.
    // uploadUrl: 'http://localhost:52536/api/Image/ImageUpload',

    //   Enable the XMLHttpRequest.withCredentials property.

    //},

    language: 'en',
    allowedContent: true,
  };

}

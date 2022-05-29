import { Component, OnInit } from '@angular/core';
import { CommentBlock } from '../comment-block/comment-block.model';

@Component({
  selector: 'app-main-conteneur',
  templateUrl: './main-conteneur.component.html',
  styleUrls: ['./main-conteneur.component.scss']
})
export class MainConteneurComponent implements OnInit {

  commentBlock: CommentBlock[] = [
      new CommentBlock('1er bloc de commentaire', '1er coprs de bloc de commentaire', '1ere interactions sociales')

  ];




  constructor() { }

  ngOnInit() {
  }

}

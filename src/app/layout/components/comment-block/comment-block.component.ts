import { Component, OnInit } from '@angular/core';
import { CommentBlock } from './comment-block.model';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.scss']
})
export class CommentBlockComponent implements OnInit {

  CommentBlock: CommentBlock

  constructor() { }

  ngOnInit() {
  }

}

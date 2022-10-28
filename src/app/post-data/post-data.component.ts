import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServerService: HttpServerService) { }

  public ngOnInit(): void {
    const payload = { body: 'Day la messenger so 4', postId: 1 };
    this.httpServerService.postComments(payload).subscribe(data => {
      console.log('postComment', data);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onAddPost() {
    // console.log(this.postForm);

    if (!this.postForm.valid) return;

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post }));
  }

  showTitleErrors() {
    const titleForm = this.postForm.get('title');
    if (titleForm?.touched && !titleForm.valid) {
      if (titleForm?.errors?.required) {
        return 'Required Field..';
      }
      if (titleForm?.errors?.minlength) {
        return 'Enter 6 or more chars..';
      }
    }
    return '';
  }

  showDescErrors() {
    const descForm = this.postForm.get('description');
    if (descForm?.touched && !descForm.valid) {
      if (descForm?.errors?.required) {
        return 'Required Field..';
      }
      if (descForm?.errors?.minlength) {
        return 'Enter 10 or more chars..';
      }
    }
    return '';
  }
}

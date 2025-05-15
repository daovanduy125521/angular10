import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
})
export class MyComponent {
  title = 'API Example with exhaustMap';
  loading = false; // Để theo dõi trạng thái của yêu cầu

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const button = document.getElementById('apiButton'); // Lắng nghe sự kiện nhấn nút

    // Lắng nghe sự kiện click và gọi API
    fromEvent(button, 'click').pipe(
      exhaustMap(() => {
        // Chỉ gọi API nếu không có yêu cầu nào đang thực hiện
        this.loading = true;
        return this.http.get('https://jsonplaceholder.typicode.com/posts'); // Gọi API thực tế
      })
    ).subscribe({
      next: (response) => {
        console.log('API Response:', response); // Kết quả trả về từ API
        this.loading = false;
      },
      error: (err) => {
        console.error('API Error:', err); // Lỗi nếu có
        this.loading = false;
      },
      complete: () => {
        console.log('API Call Completed'); // Hoàn tất API
        this.loading = false;
      }
    });
  }
}

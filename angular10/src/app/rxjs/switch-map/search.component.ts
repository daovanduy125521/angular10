import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    searchControl = new FormControl('');
    results: any[] = [];

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.searchControl.valueChanges.pipe(
            debounceTime(300),                 // Chờ người dùng dừng gõ 300ms
            distinctUntilChanged(),            // Chỉ tìm nếu giá trị thay đổi
            switchMap(term => this.apiService.search(term)) // Hủy request cũ nếu có cái mới
        ).subscribe(data => {
            this.results = data.items; // giả sử API trả về object có 'items'
        });
    }
}

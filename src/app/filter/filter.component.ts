import { Component, OnInit } from '@angular/core';
import { Subject, Group } from '../shared/classes';
import { SUB_OPTIONS, RC_OPTIONS } from '../shared/data';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  sub_options: Subject[]; // subject options
  rc_options: Group[]; // region and country options

  selected_sub_area: string;
  selected_sub_category: string;
  category_options: string[];
  selected_rc: string;
  keyword: string;
  author: string;

  min_year_input: number;
  max_year_input: number;
  year_range_input: number[];

  month_range: string[] = ['Past 3 months', 'Past 6 months', 'Choose year range'];
  month_input: string;

  min_year_range: number = new Date().getFullYear() - 30;
  max_year_range: number = new Date().getFullYear();

  constructor(private articleService: ArticleService) {
    this.sub_options = SUB_OPTIONS;
    this.rc_options = RC_OPTIONS;
  }

  ngOnInit() {
    this.selected_sub_area = this.sub_options[0].area;
    this.category_options = this.sub_options.find(option => option.area === this.selected_sub_area).category;
    this.selected_sub_category = this.category_options[0];
    this.min_year_input = this.min_year_range;
    this.max_year_input = this.max_year_range;
    this.year_range_input = [this.min_year_input, this.max_year_input];
    this.selected_rc = 'All regions / countries';
    this.month_input = 'Choose year range';
  }

  updateCategory(): void {
    this.category_options = this.sub_options.find(option => option.area === this.selected_sub_area).category;
    this.selected_sub_category = this.category_options[0];
  }

  updateYearRangeSlider(): void {
    this.min_year_input = this.year_range_input[0];
    this.max_year_input = this.year_range_input[1];
  }

  updateYearRangeInput(): void {
    if (!this.min_year_input && !this.max_year_input) {
      this.year_range_input = [this.min_year_range, this.max_year_range];
    } else if (!this.max_year_input) {
      if (this.min_year_input <= this.max_year_range) {
        this.year_range_input = [this.min_year_input, this.max_year_range];
      }
    } else if (!this.min_year_input) {
      if (this.max_year_input >= this.min_year_range) {
        this.year_range_input = [this.min_year_range, this.max_year_input];
      }
    } else if (this.min_year_input >= this.min_year_range && this.max_year_input <= this.max_year_range
      && this.min_year_input <= this.max_year_input && this.max_year_input >= this.min_year_input) {
      this.year_range_input = [this.min_year_input, this.max_year_input];
    }
  }

  getArtitcleByAuthor() {
    this.articleService.getArticlesByAuthor().subscribe(data => {
      console.log(data);
    });
  }
}

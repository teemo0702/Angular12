import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public districts: string[] = ['Chọn quận / huyện'];
  public vietNam = [
    {
      province: 'Chọn tỉnh / thành phố',
      district: ['Chọn quận / huyện'],
    },
    {
      province: 'An Giang',
      district: [
        "Thành phố Long Xuyên",
        "Thành phố Châu Đốc",
        "Thị xã Tân Châu",
        "Huyện An Phú",
        "Huyện Châu Phú",
        "Huyện Châu Thành",
        "Huyện Chợ Mới",
        "Huyện Phú Tân",
        "Huyện Thoại Sơn",
        "Huyện Tịnh Biên",
        "Huyện Tri Tôn",
      ],
    },
    {
      province: 'Bà Rịa - Vũng Tàu',
      district: [
        "Thành phố Vũng Tàu",
        "Thị xã Bà Rịa",
        "Thị xã Phú Mỹ",
        "Huyện Châu Đức",
        "Huyện Côn Đảo",
        "Huyện Đất Đỏ",
        "Huyện Long Điền",
        "Huyện Tân Thành",
        "Huyện Xuyên Mộc",
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public changeProvince(e: any) {
    const province = e.target.value;
    if(!province) return;

    // const resuts = this.vietNam.filter(data => data.province === province);
    // if(resuts && resuts.length > 0) {
    //   this.districts = resuts[0].district;
    // }

    this.districts = this.vietNam.find(data => data.province === province)?.district || [];
  }

}

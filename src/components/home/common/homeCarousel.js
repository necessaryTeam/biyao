import React from 'react';
import Swiper from 'swiper';
import {Link,hashHistory} from 'react-router-dom';
import $ from 'jquery';

export default class homeCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgSrc:[
                {
                    img:'https://bfs.biyao.com/group1/M00/42/F8/rBACW1tFv2aAN7DtAACYE1CaMno721.jpg',
                    title:'MOSION——摩尚服饰',
                    bannerImg:'https://bfs.biyao.com/group1/M00/3E/B8/rBACW1srIvCAD2G7AAF1Os0hzcc302.jpg',
                    biao:'girl',
                    sort:'lyq',
                },{
                    img:'https://bfs.biyao.com/group1/M00/40/3C/rBACVFs_LjaACtnTAACi9oJteqs745.jpg',
                    title:'GRIFFIN LAND拉杆箱',
                    bannerImg:'https://bfs.biyao.com/group1/M00/03/E3/rBACYVkUlWCAPSi1AAIXqb6wlas848.jpg',
                    biao:'xinglixiang',
                    sort:'lgx',
                },{
                    img:'https://bfs.biyao.com/group1/M00/41/EA/rBACYVs_JxOAZsQHAACvUgIrYjM517.jpg',
                    title:'TOM FOSSEY  男装',
                    bannerImg:'https://bfs.biyao.com/group1/M00/38/51/rBACYVr1cuaAO-g0AAGGU-Qw0Rc820.jpg',
                    biao:'man',
                    sort:'xizhuang',
                },{
                    img:'https://bfs.biyao.com/group1/M00/41/42/rBACVFtFvuuAYqdJAAFJuQKCssY255.jpg',
                    title:'VIZ鞋靴',
                    bannerImg:'https://bfs.biyao.com/group1/M00/40/3E/rBACW1s0lq-ANdbqAAGOfMWdn1Q052.jpg',
                    biao:'shoes',
                    sort:'banxie',
                },{
                    img:'https://bfs.biyao.com/group1/M00/42/F8/rBACW1tFvquAGOk0AACl4-fgXtU485.jpg',
                    title:'苏薇之恋女士内衣',
                    bannerImg:'https://bfs.biyao.com/group1/M00/38/DE/rBACYVr6qbWAJc1GAAEPDgnXiaY579.jpg',
                    biao:'girlneiyi',
                    sort:'bra',
                },{
                    img:'https://bfs.biyao.com/group1/M00/41/F0/rBACW1s_Jp-AQ_vHAADO88ngwtQ410.jpg',
                    title:'ELAMTO伊兰图家纺',
                    bannerImg:'https://bfs.biyao.com/group1/M00/39/5B/rBACW1r-bXWADYJBAAJXJNF6Nv0923.jpg',
                    biao:'man',
                    sort:'tshirt',
                },
                ]
        }
    }
    componentDidMount(){
        var mySwiper6 = new Swiper('#swiper6',{
                autoplay:{
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // loop: true,
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                },
            })
    }
    render() {
        const { imgSrc } = this.state;
        return (
            <div className="homeBanner">
                <div className="swiper-container" id="swiper6">
                    <div className="swiper-wrapper">
                        {
                            imgSrc.map((item,index)=><Link to={{pathname:'/shoplist',state:{shopdata:this.state.imgSrc[index]}}} className="swiper-slide zbannerItem" key={ index }><img src={ item.img } style={{ width:'100%'}}/></Link>)
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}


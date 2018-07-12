import React from 'react';
import Swiper from 'swiper';

export default class homeCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgSrc:[
                'https://bfs.biyao.com/group1/M00/41/F1/rBACW1s_Jz-ADtddAADEz8yWMWw855.jpg',
                'https://bfs.biyao.com/group1/M00/40/3C/rBACVFs_LjaACtnTAACi9oJteqs745.jpg',
                'https://bfs.biyao.com/group1/M00/41/EA/rBACYVs_JxOAZsQHAACvUgIrYjM517.jpg',
                'https://bfs.biyao.com/group1/M00/41/EA/rBACYVs_JvSAEjNsAAByuu4Gfis005.jpg',
                'https://bfs.biyao.com/group1/M00/41/EA/rBACYVs_JsqAD_55AACOt-fwE_M403.jpg',
                'https://bfs.biyao.com/group1/M00/41/F0/rBACW1s_Jp-AQ_vHAADO88ngwtQ410.jpg',
            ]
        }
    }
    componentDidMount(){
        var mySwiper6 = new Swiper('#swiper6',{
                autoplay:{
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                loop: true,
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
                            imgSrc.map((item,index)=><div className="swiper-slide" key={ index }><a><img src={ item } style={{ width:'100%'}}/></a></div>)
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}


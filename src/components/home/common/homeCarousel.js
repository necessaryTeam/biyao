import React from 'react'
import ReactSwipe from 'react-swipe';

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
    render() {
        const { imgSrc } = this.state;
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                {
                    imgSrc.map((item,index)=><div key={ index }><a><img src={ item } style={{ width:'100%'}}/></a></div>)
                }

            </ReactSwipe>
        );
    }
}


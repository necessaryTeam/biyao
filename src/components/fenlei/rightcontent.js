import React, { Component } from 'react';

import {connect} from 'react-redux';
import './css/rightcontent.scss';

// 组件 


class RightContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fenleiData:[{
                datas:{
                    curPic:'https://bfs.biyao.com/group1/M00/3A/08/rBACVFsRFfqAQMYSAACXCY0Timo099.jpg',
                    list:[
                        {
                            title:'男士内搭',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8rp-ABubpAAAXrfGO1-4229.jpg',name:'T恤'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/41/72/rBACW1s8rryATyfEAAAdQZ9vDZI578.jpg',name:'衬衫'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8rsSANHcbAAAa7-PkbUg551.jpg',name:'POLO衫'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8rtaAAURhAAAapbUcdCQ208.jpg',name:'针织衫'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/41/72/rBACW1s8rt-ACC6ZAAAaYqmu99Q060.jpg',name:'卫衣'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/35/7C/rBACYVrZYpSAewMhAAAe1Vy41Og669.jpg',name:'马甲'
                                },
                            ]
                        },
                        {
                            title:'男士外套',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/41/6B/rBACYVs8rvKANN2aAAAgQ0P183Y591.jpg',name:'西服套装'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/3A/45/rBACYVsFNcOAYw7zAAAdS-YPgGc381.jpg',name:'皮衣夹克'
                                },
                            ]
                        },
                    ]
                }},
                {datas:{
                    curPic:'https://bfs.biyao.com/group1/M00/3B/BC/rBACW1sRFg6ASIY-AAB7qWFfhJ4728.jpg',
                    list:[
                        {
                            title:'女裙',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/41/6C/rBACYVs8sQeAS670AAAgWnvbFO0972.jpg',name:'连衣裙'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8sQ-AEh8qAAAbm9flKqM101.jpg',name:'半身裙'
                                },
                            ]
                        },
                        {
                            title:'女士上装',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/33/14/rBACYVrB_FCAGqnnAAAg79JYZIo290.jpg',name:'短袖T恤'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8sTKANIWtAAAaDr4-OYE105.jpg',name:'衬衫/雪纺'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/41/72/rBACW1s8sV6AV28CAAAcT95YgYg749.jpg',name:'针织/羊绒/羊毛衫'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/41/6C/rBACYVs8sWeANgV5AAAc1V6eFXs851.jpg',name:'卫衣'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/36/46/rBACW1rgQ2yAMdskAAAZZw5he1k014.jpg',name:'大衣/外套'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/28/80/rBACVFpgXP2AMPmGAAAYLXKi2Xc299.jpg',name:'羽绒服/棉衣'
                                },
                            ]
                        },
                        {
                            title:'女士下装',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/41/72/rBACW1s8sXqAD28lAAAWurzmx5k243.jpg',name:'短裤'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/41/6C/rBACYVs8sdiAKXS-AAAS9BJUzMA334.jpg',name:'休闲裤'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/3F/BC/rBACVFs8scuAahMeAAAWWgr7Rv4362.jpg',name:'牛仔裤'
                                },
                            ]
                        },{
                            title:'特色女装',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/41/72/rBACW1s8seGAQ-FuAAAchVB5yy8871.jpg',name:'孕妇装'
                                },
                            ]
                        },
                    ]
                }},
                {datas:{
                    curPic:'https://bfs.biyao.com/group1/M00/3B/B5/rBACYVsRFhyAEj8KAACi1rrdx8k077.jpg',
                    list:[
                        {
                            title:'近视眼镜',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/40/CF/rBACYVs5vTuALewuAAAQEwtwJ-k421.jpg',name:'成人款'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/40/D0/rBACYVs5wfaAQ8SJAAAQ0Foj4E8130.jpg',name:'儿童款'
                                },
                            ]
                        },
                        {
                            title:'太阳镜',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/40/D0/rBACYVs5wH-ARIJQAAAT4KPGumI118.jpg',name:'平光太阳镜'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/40/D6/rBACW1s5xk6ABPcWAAAT4BToacU795.jpg',name:'光学太阳镜'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/42/79/rBACW1tDHdCAbDvnAAAUMgyqSsw157.jpg',name:'儿童太阳镜'
                                },
                            ]
                        },{
                            title:'老花镜',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/40/CF/rBACYVs5vcqAG9bRAAAVtyCb_KQ805.jpg',name:'平光太阳镜'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/40/CF/rBACYVs5vcqAG9bRAAAVtyCb_KQ805.jpg',name:'儿童远视镜'
                                },
                            ]
                        },
                    ]
                }},
                {datas:{
                    curPic:'https://bfs.biyao.com/group1/M00/3B/BC/rBACW1sRFi2AFVZjAACuguqpoOw141.jpg',
                    list:[
                        {
                            title:'内衣',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/41/72/rBACW1s8sjWAfn--AAAhxXKba3A225.jpg',name:'文胸/吊带'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/3A/4D/rBACW1sFO6aAQCF7AAAW97ZlxMI850.jpg',name:'女士内裤'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/36/46/rBACW1rgRi6AMJh6AAAhvqf8_LE653.jpg',name:'男士打底'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/36/47/rBACW1rgRsyAVKXuAAAY2ch8WQk787.jpg',name:'塑身内衣'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/33/2F/rBACVFrUgG6AGPyzAAAhWvgCz2M529.jpg',name:'睡衣/家居服'
                                },
                            ]
                        },
                        {
                            title:'袜子',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/36/40/rBACYVrgR1qAGF84AAAXyKrBKsc212.jpg',name:'棉袜'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/32/A2/rBACVFrOG7eACvxeAAARpkMopVM857.jpg',name:'连裤袜/丝袜'
                                },
                            ]
                        },{
                            title:'配饰',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/34/DC/rBACYVrUgdeAWq6UAAApNkI5j40054.jpg',name:'遮阳/雨伞'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/34/DD/rBACYVrUg0KAbIzxAAAWHAECqrQ061.jpg',name:'手套/帽子'
                                },
                            ]
                        },
                    ]
                }},
                {datas:{
                    curPic:'https://bfs.biyao.com/group1/M00/3A/09/rBACVFsRFn2AXU3qAAEcwE1vXoE274.jpg',
                    list:[
                        {
                            title:'男鞋',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/38/3A/rBACYVr1A46ACaqbAAAfXOHI4dg557.jpg',name:'凉鞋'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/20/49/rBACW1n5dBOAQ7YKAAAhEecWzcI007.jpg',name:'休闲鞋'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/36/26/rBACW1re-j6AWN6GAAAepFmnPgM246.jpg',name:'商务鞋'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/19/AC/rBACYVmMH6-AM_BPAAAdRlT1N_s815.jpg',name:'板鞋'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/16/A7/rBACW1llhb-Ab0_TAAAkS84Tb_E075.jpg',name:'男靴'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/34/5A/rBACYVrO1-KAHj77AAAmxv9yyNs052.jpg',name:'拖鞋'
                                },
                            ]
                        },
                        {
                            title:'女鞋',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/34/72/rBACVFre-EWAEZWJAAAhSrsX4y0781.jpg',name:'凉鞋'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/36/26/rBACW1re-FCAWrq0AAAhZ35Z-W0742.jpg',name:'单鞋'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/15/68/rBACW1lSWniACzrrAAAYINnkU5M044.jpg',name:'休闲鞋'
                                },
                            ]
                        },
                    ]
                }},
                {datas:{
                    curPic:'https://bfs.biyao.com/group1/M00/3B/B5/rBACYVsRFrSAfo04AADwDxWdAOs706.jpg',
                    list:[
                        {
                            title:'功能箱包',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/34/5B/rBACW1rOr32AEcsxAAAZr8w-ZbY407.jpg',name:'休闲/功能包'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/34/5B/rBACW1rOriGAKUsrAAAY_l4l4fQ925.jpg',name:'拉杆箱'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/34/53/rBACYVrOr7WAVz5vAAAf_sEk2YA255.jpg',name:'妈咪包'
                                },
                            ]
                        },
                        {
                            title:'男包/皮带',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/2A/31/rBACYVpgXqGACgFKAAAc9jBnT8w975.jpg',name:'胸包/背包'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/34/5A/rBACW1rOq_6AVJchAAAdy1svoUg897.jpg',name:'商务包'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/2A/37/rBACW1pgXpSALpTbAAAn_ho4x7w220.jpg',name:'钱包/手包'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/36/70/rBACW1rhod-AZgQcAAAYfIkOIyI803.jpg',name:'真皮皮带'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/1D/10/rBACYVnEeNOAbQJOAAASclg1HPg909.jpg',name:'卡包/钥匙包'
                                },
                            ]
                        },
                    ]
                }},
                {datas:{
                    curPic:'https://bfs.biyao.com/group1/M00/29/5D/rBACW1pXQkOAJkPfAADidyEk6Rs454.jpg',
                    list:[
                        {
                            title:'外设办公',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/41/F1/rBACYVs_QnKAdaT3AAAahIKvPYg144.jpg',name:'数码办公'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/40/22/rBACW1s0f5WAVxGAAAAgC7xuelA344.jpg',name:'数据线'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/41/F7/rBACW1s_QqiAN854AAAX11WKsGQ236.jpg',name:'数码配件'
                                },
                            ]
                        },
                        {
                            title:'影音充电',
                            itemDatas:[
                                {
                                pic:'https://bfs.biyao.com/group1/M00/36/98/rBACW1ri782AM1NXAAAZ_mIRxSw567.jpg',name:'影音娱乐'
                                },{
                                    pic:'https://bfs.biyao.com/group1/M00/3E/6D/rBACVFs0gPqAbWhZAAAQcAuP-d8577.jpg',name:'充电设备'
                                },
                            ]
                        },
                    ]
                }},
            ]
        };
        // console.log(this.props)
    }
    render() {
        return (
            <div className="rightContent">
                <img className="curPic" src={this.state.fenleiData[this.props.fenleiIdx].datas.curPic} />
                {(function(self){
                    return self.state.fenleiData[self.props.fenleiIdx].datas.list.map(function (item,idx){
                        return <div className="lists" key={idx}>
                            <div className="title">{item.title}</div>
                            <div className="items">
                                {(function (){
                                    return item.itemDatas.map(function (itm,index){
                                        return <div className="alist" key={index}>
                                            <img className="listPic" src={itm.pic} />
                                            <p>{itm.name}</p>
                                        </div>
                                    })
                                })()}
                            </div>
                        </div>
                    })
                })(this)}
            </div>
        );
    }
}

export default connect((state) => {
    //他把store的state全部放到该组件的props里面
    return state
}, (dispatch) => {
    return {
        fenleiNavChecked: (cur) => {
            //可以触发多个
            // console.log(cur)
            dispatch({
                type: 'fenleiNavChecked',
                fenleiIdx: cur,
            })
        }
    }
})(RightContent);
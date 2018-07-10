import React, {Component} from 'react';

export default class shopCarMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [
                {
                    shopName: '1Blilin 家居用品',
                    src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                    goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                    price: 59,
                    sum: 1,
                    goodsAll: '32片装'
                },
                {
                    shopName: '2Blilin 家居用品',
                    src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                    goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                    price: 59,
                    sum: 1,
                    goodsAll: '32片装'
                },
                {
                    shopName: '3Blilin 家居用品',
                    src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                    goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                    price: 59,
                    sum: 1,
                    goodsAll: '32片装'
                },
            ],
            showOperate: [false,false,false],
            currentIndexS: null,
            shopSelectAll: [false,false,false],
        }
        this.isShowOperate = this.isShowOperate.bind(this);
        this.addItem = this.addItem.bind(this);
        this.minItem = this.minItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.shopSelectAll = this.shopSelectAll.bind(this);
        // this.selectThis = this.selectThis.bind(this);
    }

    // selectThis(e,index){
    //     const { shopSelectAll } = this.state;
    //     if(shopSelectAll){
    //         return 'checked';
    //     }
    // }
    shopSelectAll(e,index){
        // console.log(e.target.checked);
        let { shopSelectAll } = this.state;
        // if(e.target.checked){
        //     shopSelectAll = true;
        // }else{
        //     shopSelectAll = false;
        // }
        console.log(index)
        e.target.checked?shopSelectAll[index] = true:shopSelectAll[index] = false;
        this.setState({ shopSelectAll })
    }
    isShowOperate(e, index) {
        console.log(e.target.innerHTML)
        let {showOperate} = this.state;
        let {currentIndexS} = this.state;
        showOperate[index] = !showOperate[index];
        currentIndexS = index;
        if (e.target.tagName === 'SPAN' && showOperate[index] === true) {
            e.target.innerHTML = '完成'
        } else if (e.target.tagName === 'SPAN' && showOperate[index] === false) {
            e.target.innerHTML = '编辑'
        }
        this.setState({showOperate, currentIndexS})
    }
    deleteItem(e,index){
        let { item } = this.state;
        let { currentIndexS } = this.state;
        // console.log(index,item[index])
        item.splice(index,1);
        currentIndexS = null;
        console.log(this.state.currentIndexS)
        this.setState({item,currentIndexS})
    }
    minItem(e,index){
        const { item } = this.state;
        item[index].sum>0?item[index].sum--:item[index].sum=0;
        // console.log(item[index].sum)
        this.setState({item});
    }
    addItem(e,index){
        const { item } = this.state;
        item[index].sum++;
        console.log(item[index].sum)
        this.setState({item});
    }

    render() {
        const {item} = this.state;
        return (
            <ul style={{flex: 1, width: '100%', padding: '0 10px', background: '#fff'}}>
                {
                    item.map((item, index) => <li key={index}>
                        <div style={{padding: '12px 0', borderBottom: '1px solid #eee'}}>
                            <input type="checkbox" onClick={ (e)=>this.shopSelectAll(e,index) } />
                            <span>
                                <i className='iconfont icon-dianpuguanli1'
                                   style={{color: '#7f4395', marginLeft: '10px'}}></i>
                                <span style={{color: '#7f4395', marginRight: '10px'}}>{item.shopName}</span>
                                <i className='iconfont icon-iconfont'></i>
                            </span>
                            <span style={{float: 'right'}} onClick={(e) => this.isShowOperate(e,index)}>编辑</span>
                        </div>
                        <div style={{overflow: 'hidden', height: '100px', padding: '12px 0'}}>
                            <div style={{float: 'left', height: '100%', lineHeight: '72px'}}>
                                <input type="checkbox" checked={ this.state.shopSelectAll[index]?'checked':''}/>
                            </div>
                            <div style={{float: 'left'}}>
                                <div style={{width: '72px', float: 'left', border: '1px solid #eee', margin: '0 10px'}}>
                                    <img src={item.src} style={{width: '100%'}}/>
                                </div>
                                <div style={{float: 'left', position: 'relative'}}>
                                    <h3 style={{
                                        width: '220px',
                                        overflow: 'hidden',
                                        fontSize: '12px'
                                    }}>{item.goodsName}</h3>
                                    <div style={{padding: '10px 0'}}>
                                        <p>{item.goodsAll}</p>
                                        <span style={{marginRight: '10px'}}>￥{item.price}</span>
                                        <span>x {item.sum}</span>
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        right: '0',
                                        top: '0',
                                        background: '#fff',
                                        height: '100%',
                                        width: '100%',
                                        lineHeight: '84px',
                                        display: this.state.showOperate[index] ? 'block' : 'none'
                                    }}>
                                        <div style={{float: 'left', height: '100%', paddingTop: '27px'}}>
                                            <span style={{
                                                float: 'left',
                                                lineHeight: '30px',
                                                width: '30px',
                                                height: '30px',
                                                display: 'inline-block',
                                                textAlign: 'center',
                                                border: '1px solid #eee',
                                                color:item.sum===0?'#eee':''
                                            }} onClick={ (e)=>this.minItem(e,index)}>-</span>
                                            <span style={{
                                                float: 'left',
                                                width: '80px',
                                                height: '30px',
                                                lineHeight: '30px',
                                                border: '1px solid #eee',
                                                borderRight: 0,
                                                borderLeft: 0,
                                                textAlign: 'center',
                                                display: 'inline-block'
                                            }}>{item.sum}</span>
                                            <span style={{
                                                float: 'left',
                                                lineHeight: '30px',
                                                width: '30px',
                                                height: '30px',
                                                display: 'inline-block',
                                                textAlign: 'center',
                                                border: '1px solid #eee'
                                            }} onClick={ (e)=>this.addItem(e,index) }>+</span>
                                        </div>
                                        <div style={{
                                            float: 'right',
                                            background: '#f33',
                                            color: '#fff',
                                            width: '50px',
                                            height: '100%',
                                            textAlign: 'center',
                                            position: 'absolute',
                                            right: '-30px'
                                        }} onClick={ (e)=>this.deleteItem(e,index) }>
                                            <i className='iconfont icon-guanbi'></i>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>)
                }
            </ul>
        )
    }
}
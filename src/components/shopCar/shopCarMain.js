import React, {Component} from 'react';

export default class shopCarMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [
                {
                    shopName: '1Blilin 家居用品',
                    thisShopGoods:[
                        {
                            src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                            goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                            price: 59,
                            sum: 1,
                            goodsAll: '32片装'
                        },
                        {
                            src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                            goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                            price: 59,
                            sum: 1,
                            goodsAll: '32片装'
                        },
                        {
                            src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                            goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                            price: 59,
                            sum: 1,
                            goodsAll: '32片装'
                        },
                        {
                            src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                            goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                            price: 59,
                            sum: 1,
                            goodsAll: '32片装'
                        }
                    ],
                    thisStates:[],
                    allSelect:false,
                    showOperate:[]
                },
                {
                    shopName: '2Blilin 家居用品',
                    thisShopGoods:[
                        {
                            src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                            goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                            price: 59,
                            sum: 1,
                            goodsAll: '32片装'
                        }
                    ],
                    thisStates:[],
                    allSelect:false
                },
                {
                    shopName: '3Blilin 家居用品',
                    thisShopGoods:[
                        {
                            src: 'https://bfs.biyao.com/group1/M00/3C/CC/rBACVFspwZ6ACJbUAAGIbDkoOwA081_400x400.jpg',
                            goodsName: '含皂钢丝棉去污皂刷 懒人清洁神器 32块装',
                            price: 59,
                            sum: 1,
                            goodsAll: '32片装'
                        }
                    ],
                    thisStates:[],
                    allSelect:false
                },
            ],
            showOperate: [],
            currentIndexS: null,

        }
        this.isShowOperate = this.isShowOperate.bind(this);
        this.addItem = this.addItem.bind(this);
        this.minItem = this.minItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.shopSelectAll = this.shopSelectAll.bind(this);
        // this.selectThis = this.selectThis.bind(this);
        this.selectSome = this.selectSome.bind(this);
        this.isGoodsAllSelect = this.isGoodsAllSelect.bind(this);
    }

    // selectThis(e,index){
    //     const { shopSelectAll } = this.state;
    //     if(shopSelectAll){
    //         return 'checked';
    //     }
    // }
    componentWillMount(){
        let { showOperate } = this.state;
        let { shopSelectAll } = this.shopSelectAll;
        let { item } = this.state;
        showOperate = item.map(()=>false);
        shopSelectAll = item.map(()=>false);

        for(let key of item){
            key.thisStates = key.thisShopGoods.map(()=>false)
            key.showOperate = key.thisShopGoods.map(()=>false)
        }

        this.setState({ item })
        console.log(item)

    }
    selectSome(e,index,index2){
        let { item } = this.state;
        item[index].thisStates[index2] = !item[index].thisStates[index2];
        if(item[index].thisStates[index2] === false){
            item[index].allSelect = false;
        }
        this.setState({ item });
    }
    //勾上商品全选
    shopSelectAll(e, index) {

        let { item } = this.state;

        item[index].allSelect = !item[index].allSelect;
        if(item[index].allSelect === false){
            for(let i = 0;i<item[index].thisStates.length;i++){

                item[index].thisStates[i] = false;
            }
        }else if(item[index].allSelect === true){
            for(let i = 0;i<item[index].thisStates.length;i++){

                item[index].thisStates[i] = true;
            }
        }


        this.setState({ item })


    }
    //商品勾完全选
    isGoodsAllSelect(e,index){
        let { item } = this.state;

        for(let i = 0;i < item[index].thisStates.length;i++){
            // console.log(item[index].thisStates.length)
            if(item[index].thisStates[i] === false ){
                console.log(item[index].thisStates[i])
                return
            }
        }
        item[index].allSelect = true;
        this.setState({ item })
        console.log(item.allSelect)
    }

    isShowOperate(e, index,index2) {
        console.log(e.target.innerHTML)
        let { item } = this.state;
        let {currentIndexS} = this.state;
        item[index].showOperate[index2] = !item[index].showOperate[index2];
        currentIndexS = index;
        if (e.target.tagName === 'SPAN' && item[index].showOperate[index2] === true) {
            e.target.innerHTML = '完成'
        } else if (e.target.tagName === 'SPAN' && item[index].showOperate[index2] === false) {
            e.target.innerHTML = '编辑'
        }
        this.setState({item, currentIndexS})
    }


    deleteItem(e, index) {
        let {item} = this.state;
        let {currentIndexS} = this.state;
        // console.log(index,item[index])
        item.splice(index, 1);
        currentIndexS = null;
        console.log(this.state.currentIndexS)
        this.setState({item, currentIndexS})
    }

    minItem(e, index) {
        const {item} = this.state;
        item[index].thisShopGoods.sum > 0 ? item[index].thisShopGoods.sum-- : item[index].thisShopGoods.sum = 0;
        // console.log(goods.thisShopGoods[index].sum)
        this.setState({item});
    }

    addItem(e, index) {
        const {item} = this.state;
        item[index].thisShopGoods.sum++;
        console.log(item[index].thisShopGoods.sum)
        this.setState({item});
    }

    render() {
        const {item} = this.state;
        return (
            <ul style={{flex: 1, width: '100%', padding: '0 10px', background: '#fff'}}>
                {
                    item.map((item, index) => <li key={index}>
                        <div style={{padding: '12px 0', borderBottom: '1px solid #eee'}}>
                            <input type="checkbox" onClick={(e) => this.shopSelectAll(e,index)}  checked={ this.state.item[index].allSelect?'checked':''}/>
                            <span>
                                <i className='iconfont icon-dianpuguanli1'
                                   style={{color: '#7f4395', marginLeft: '10px'}}></i>
                                <span style={{color: '#7f4395', marginRight: '10px'}}>{item.shopName}</span>
                                <i className='iconfont icon-iconfont'></i>
                            </span>
                            <span style={{float: 'right'}} onClick={(e) => this.isShowOperate(e,index)}>编辑</span>
                        </div>
                        {
                            item.thisShopGoods.map((goods,index2)=><div style={{overflow: 'hidden', height: '100px', padding: '12px 0'}} key={ index2 }>
                                <div style={{float: 'left', height: '100%', lineHeight: '72px'}}>
                                    <input type="checkbox" checked={this.state.item[index].thisStates[index2] ? 'checked' : ''} onClick={ (e)=>this.selectSome(e,index,index2) } onChange={e=>this.isGoodsAllSelect(e,index) }/>
                                </div>
                                <div style={{float: 'left'}}>
                                    <div style={{width: '72px', float: 'left', border: '1px solid #eee', margin: '0 10px'}}>
                                        <img src={goods.src} style={{width: '100%'}}/>
                                    </div>
                                    <div style={{float: 'left', position: 'relative'}}>
                                        <h3 style={{
                                            width: '220px',
                                            overflow: 'hidden',
                                            fontSize: '12px'
                                        }}>{goods.goodsName}</h3>
                                        <div style={{padding: '10px 0'}}>
                                            <p>{goods.goodsAll}</p>
                                            <span style={{marginRight: '10px'}}>￥{goods.price}</span>
                                            <span>x {goods.sum}</span>
                                        </div>
                                        <div style={{
                                            position: 'absolute',
                                            right: '0',
                                            top: '0',
                                            background: '#fff',
                                            height: '100%',
                                            width: '100%',
                                            lineHeight: '84px',
                                            display: this.state.item[index].showOperate[index2] ? 'block' : 'none'
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
                                                color: goods.sum === 0 ? '#eee' : ''
                                            }} onClick={(e) => this.minItem(e, index2)}>-</span>
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
                                                }}>{goods.sum}</span>
                                                <span style={{
                                                    float: 'left',
                                                    lineHeight: '30px',
                                                    width: '30px',
                                                    height: '30px',
                                                    display: 'inline-block',
                                                    textAlign: 'center',
                                                    border: '1px solid #eee'
                                                }} onClick={(e) => this.addItem(e, index2)}>+</span>
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
                                            }} onClick={(e) => this.deleteItem(e, index2)}>
                                                <i className='iconfont icon-guanbi'></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }

                    </li>)
                }
            </ul>
        )
    }
}
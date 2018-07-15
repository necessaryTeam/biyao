import React, {Component} from 'react';
import { connect } from 'react-redux'


export default connect((state) => {
    //他把store的state全部放到该组件的props里面
    return state
}, (dispatch) => {
    return {
        allPriceCompute: (price) => {
            //可以触发多个
            dispatch({
                type: 'allPriceCompute',
                allPrice: price,
            })
        }
    }
}) (class shopCarMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [
            ],
            currentIndexS: null,
            sumPrice:0,
            sumAllSelect:false,
            showToSelectGoods:false,
            allAllOperateI:false
        }
        this.isShowOperate = this.isShowOperate.bind(this);
        this.addItem = this.addItem.bind(this);
        this.minItem = this.minItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.shopSelectAll = this.shopSelectAll.bind(this);
        this.selectSome = this.selectSome.bind(this);
        this.isGoodsAllSelect = this.isGoodsAllSelect.bind(this);
        this.setDeleteState = this.setDeleteState.bind(this);
        this.cancleDelete = this.cancleDelete.bind(this);
        this.cumputAllPrice = this.cumputAllPrice.bind(this);
        this.allSelectY = this.allSelectY.bind(this);
        this.judgeAllAllSelect = this.judgeAllAllSelect.bind(this);
        this.checkOut = this.checkOut.bind(this);
        this.allAllOperate = this.allAllOperate.bind(this);
        this.saveState = this.saveState.bind(this);
    }


    //初始化状态
    componentWillMount(){
        let item1 = [],thisGoodsArr=[],{sumAllSelect} = this.state;
        if(!window.localStorage){
            console.log('不支持localStorage');
        }else{
            let storage = window.localStorage;
            if(storage.sumAllSelect){
                JSON.parse(storage.sumAllSelect)?sumAllSelect = true:sumAllSelect = false;
            }
            if(storage.shopCar){
                let itemArr = JSON.parse(storage.shopCar);
                for(let i = 0;i < itemArr.length;i++){
                    // console.log(i+1)
                    if(i+1 < itemArr.length &&itemArr[i].brand === itemArr[i+1].brand&&(itemArr[i].size!==itemArr[i+1].size||itemArr[i].color!==itemArr[i+1].color)){
                        thisGoodsArr.push(itemArr[i]);
                        continue
                    }else{
                        thisGoodsArr.push(itemArr[i]);
                    }
                    item1.push(new NewItem(itemArr[i].brand,thisGoodsArr,[],false,[],[],false,itemArr[i].url))
                    thisGoodsArr = [];
                }
            }


            function NewItem(shopName,thisShopGoods,thisStates,allSelect,showOperate,deleteState,completeOrEdit,goodUrl) {
                this.shopName = shopName;
                this.thisShopGoods = thisShopGoods;
                this.thisStates = thisStates;
                this.allSelect = allSelect;
                this.showOperate = showOperate;
                this.deleteState = deleteState;
                this.completeOrEdit = completeOrEdit;
                this.goodUrl = goodUrl
            }
        }

        // let { item } = this.state;
        // console.log(item1)

        // for(let key of item1){
        //     if(!window.localStorage){
        //         console.log('不支持localStorage');
        //     }else{
        //         let storage = window.localStorage;
        //         if(storage.saveState){
        //             key.thisStates = storage.saveState[]
        //         }
        //         key.thisStates = key.thisShopGoods.map(()=>false);
        //     }
        //     key.showOperate = key.thisShopGoods.map(()=>false);
        //     key.deleteState = key.thisShopGoods.map(()=>false);
        // }

        for(let i = 0;i<item1.length;i++){
            if(!window.localStorage){
                console.log('不支持localStorage');
            }else{
                let storage = window.localStorage;
                let saveStateArr = JSON.parse(storage.saveState);
                if(storage.saveState && JSON.parse(storage.saveState).length > 0 && i < saveStateArr.length){
                    console.log('进入缓存')
                    console.log(saveStateArr,i);
                    item1[i].thisStates = saveStateArr[i].thisStates.map(item=>item)
                    // console.log(saveStateArr)
                    // console.log(JSON.parse(storage.saveState))
                }else{
                    item1[i].thisStates = item1[i].thisShopGoods.map(()=>false);
                }
            }
            item1[i].showOperate = item1[i].thisShopGoods.map(()=>false);
            item1[i].deleteState = item1[i].thisShopGoods.map(()=>false);
        }
        let { item } = this.state;
        item = item1;


        this.setState({ item },()=>{
            this.saveState();
        });
        if(!window.localStorage){
            console.log('不支持localStorage');
        }else {
            let storage = window.localStorage;

            if(storage.saveState)
            {
                console.log(666)
            }
            if(storage.saveState && JSON.parse(storage.saveState).length > 0){
                let saveStateArr = JSON.parse(storage.saveState);
                console.log(saveStateArr)
                for(let i = 0;i < item.length;i++){

                    if(i<saveStateArr.length){
                        // item[i].allSelect=false;
                        saveStateArr[i].allSelect?item[i].allSelect=true:item[i].allSelect=false;
                        storage.sumAllSelect = false;
                    }
                }
            }
        }
        this.setState({ item,sumAllSelect });

    }

    // componentWillReceiveProps(){
    //     this.allSelectY()
    // }

    //保存状态
    saveState(){
        let saveState_x = [],{ item } = this.state,{ sumAllSelect } = this.state;

        // console.log(item)
        for(let key of item){
                saveState_x.push(new NewSaveState(key.thisStates,key.allSelect))
        }


        function NewSaveState(thisStates,allSelect){
            this.thisStates = thisStates;
            this.allSelect = allSelect;
        }


        if(!window.localStorage){
            console.log('!不支持localStorage')
        }else{
            let storage = window.localStorage;
            storage.setItem('saveState',JSON.stringify(saveState_x))
            storage.setItem('sumAllSelect',JSON.stringify(sumAllSelect))
            console.log(storage)
        }
        this.cumputAllPrice();


    }
    //操作所有
    allAllOperate(){
        let { item } = this.state;
        let { allAllOperateI } = this.state;
        allAllOperateI = !allAllOperateI;
        // console.log(allAllOperate)
        for(let i = 0;i<item.length;i++){
            for(let j = 0;j<item[i].showOperate.length;j++){
                allAllOperateI?(item[i].showOperate[j] = true,item[i].completeOrEdit = true):(item[i].showOperate[j] = false,item[i].completeOrEdit = false);
            }
        }

        this.setState({ item,allAllOperateI },()=>{
            this.saveState()
        });
    }

    checkOut(){
        let { item } = this.state;
        let isTrue,{ showToSelectGoods } = this.state;

        loop1:for(let key1 of item){
            for(let key2 of key1.thisStates){
                if(key2){
                    isTrue = false;
                    break loop1
                }
            }
            isTrue = true;
        }
        showToSelectGoods = isTrue;






        this.setState({ showToSelectGoods })
        setTimeout(()=>{
            showToSelectGoods = false;
            this.setState({ showToSelectGoods })
        },3000)


    }
    allSelectY(){
        // console.log(666)
        const {item} = this.state;
        let { sumAllSelect } = this.state;
        sumAllSelect =!sumAllSelect;
        if(sumAllSelect === true){
            for(let key of item){
                key.allSelect = true;
                for(let i = 0;i<key.thisStates.length;i++){
                    key.thisStates[i] = true;
                }
            }
            this.setState({ item,sumAllSelect },()=>{
                this.saveState();
            });
        }else if(sumAllSelect === false){
            for(let key of item){
                key.allSelect = false;
                for(let i = 0;i<key.thisStates.length;i++){
                    key.thisStates[i] = false;
                }
            }
            this.setState({ item,sumAllSelect },()=>{
                this.saveState();
            });
        }

        this.cumputAllPrice();
        // console.log(666)
        // this.setState({ item });
        //
        // for(let key of item){
        //     key.allSelect = false;
        // for(let i = 0;i<key.thisStates.length;i++){
        //     key.thisStates[i] = true;
        // }

        // this.setState({ item });



    }

    //所有商品全选
    judgeAllAllSelect(){
        let { sumAllSelect } = this.state;
        let { item } = this.state;
        for(let key of item){
            if(key.allSelect===false){
                sumAllSelect = false;
                break
            }
            sumAllSelect = true;
        }
        this.setState({ sumAllSelect },()=>{
            this.saveState()
        });
    }
    //设置删除状态
    setDeleteState(e,index,index2){
        const { item } = this.state;
        item[index].deleteState[index2] = true;
        this.setState({ item },()=>{
            this.saveState()
        });
    }
    //取消删除
    cancleDelete(e,index,index2){
        const { item } = this.state;
        item[index].deleteState[index2] = false;
        this.cumputAllPrice();
        this.setState({ item },()=>{
            this.saveState()
        });
    }

    //计算价格
    cumputAllPrice(){
        const { item } = this.state;
        let { sumPrice } = this.state;
        for(let key of item){
            key.thisStates.map((item,index)=>{
                if( item === true ){
                    sumPrice += key.thisShopGoods[index].price * key.thisShopGoods[index].sum;
                }
            })
        }
        // this.allSelectY();
        this.props.allPriceCompute(sumPrice);
        // console.log(sumPrice)

    }
    //单个商店单选
    selectSome(e,index,index2){
        let { item } = this.state;
        // let { sumPrice } = this.state;
        item[index].thisStates[index2] = !item[index].thisStates[index2];
        // if(item[index].thisStates[index2] === false){
        //     item[index].allSelect = false;
        // }
        for(let key of item[index].thisStates){
            if(key===false){
                item[index].allSelect = false;
                break
            }
            item[index].allSelect = true;
        }
        // console.log(sumPrice)
        this.cumputAllPrice();
        this.judgeAllAllSelect();
        this.setState({ item },()=>{
            this.saveState();
        });
        // console.log(item[index].allSelect)
        // console.log(item[index].thisStates)
    }


    //单个商店商品全选
    shopSelectAll(e, index) {

        // console.log(this.props.realAllSelect)

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
        // console.log(item[index].allSelect)

        this.judgeAllAllSelect();
        this.cumputAllPrice();
        this.setState({ item },()=>{
            this.saveState();
        });

    }
    //商品勾完全选onChange
    isGoodsAllSelect(e,index){
        let { item } = this.state;
        if(item[index]!= null){
            for(let i = 0;i < item[index].thisStates.length;i++){
                if(item[index].thisStates[i] === false ){
                    return
                }
            }
            item[index].allSelect = true;
            this.setState({ item },()=>{
                this.saveState()
            })
        }

    }

    //显示操作
    isShowOperate(e, index,arr) {
        let showAllOperate,{ item } = this.state;
        let {currentIndexS} = this.state;
        let { allAllOperateI } = this.state;
        currentIndexS = index;
         item[index].completeOrEdit = !item[index].completeOrEdit;

        this.saveState();
        for(let index2 = 0;index2 < arr.length ;index2++)
        {
            item[index].showOperate[index2] = !item[index].showOperate[index2];
            if (item[index].showOperate[index2] === false) {
                if(!window.localStorage){
                    console.log('不支持localStorage哦');
                }else{
                    let itemArr,storage = window.localStorage;
                    itemArr = JSON.parse(storage.shopCar);

                    //判断两个物品属性是否相等
                    for(let i=0;i<itemArr.length;i++){
                        if(itemArr[i].id === item[index].thisShopGoods[index2].id&&itemArr[i].color === item[index].thisShopGoods[index2].color&&itemArr[i].size === item[index].thisShopGoods[index2].size){
                            itemArr[i].sum = item[index].thisShopGoods[index2].sum;
                        }
                    }
                    storage.clear();

                    storage.setItem('shopCar',JSON.stringify(itemArr))
                }
            }
            if(item[index].thisShopGoods[index2].sum === 0){
                item[index].deleteState[index2] = true;
            }
        }

        allAllOperateI = showAllOperate;
        this.setState({item, currentIndexS,allAllOperateI},()=>{
            this.saveState()
        })
    }

    //删除item
    deleteItem(e, index,index2) {
        let {item} = this.state;


        if(!window.localStorage){
            console.log('不支持localStorage哦');
        }else{

            let itemArr,storage = window.localStorage;
            itemArr = JSON.parse(storage.shopCar);

            for(let i=0;i<itemArr.length;i++){
                if(itemArr[i].id === item[index].thisShopGoods[index2].id&&itemArr[i].color === item[index].thisShopGoods[index2].color&&itemArr[i].size === item[index].thisShopGoods[index2].size){
                    itemArr.splice(i,1);

                }
            }
            storage.clear();

            storage.setItem('shopCar',JSON.stringify(itemArr))
        }

        item[index].deleteState.splice(index2,1);
        item[index].thisStates.splice(index2, 1);
        item[index].showOperate.splice(index2,1);
        item[index].thisShopGoods.splice(index2, 1);
        if(item[index].thisShopGoods.length === 0 ){
            item.splice(index,1)
        }



        this.cumputAllPrice();
        this.isGoodsAllSelect(e,index);
        this.judgeAllAllSelect();
        this.setState({item},()=>{
            this.saveState()
        })
    }

    minItem(e, index,index2) {
        const {item} = this.state;
        item[index].thisShopGoods[index2].sum > 0 ? item[index].thisShopGoods[index2].sum-- : item[index].thisShopGoods[index2].sum = 0;
        this.cumputAllPrice();
        this.setState({item},()=>{
            this.saveState()
        });
    }

    addItem(e, index,index2) {
        const {item} = this.state;
        item[index].thisShopGoods[index2].sum++;
        this.cumputAllPrice();
        this.setState({item},()=>{
            this.saveState()
        });

    }

    render() {
        const {item} = this.state;
        return (
            <div>
                <div style={{ display:'flex',borderBottom:'2px solid #eee',height:'42px',lineHeight:'42px',padding:'0 10px',position:'fixed',background:'#fff',width:'100%',zIndex:'66'}}>
                    <span ><i className='iconfont icon-home-solid' style={{ fontSize:'20px'}}></i></span>
                    <p style={{ flex:1,textAlign:'center',fontSize:'16px'}}>购物车</p>
                    <span style={{ fontSize:'16px'}} onClick={ this.allAllOperate }>{ this.state.allAllOperateI?'完成':'编辑'}</span>
                </div>
                <ul style={{flex: 1, width: '100%', background: '#fff',padding:'50px 10px'}}>
                    {
                        item.map((item, index) => <li key={index}>
                            <div style={{padding: '12px 0', borderBottom: '1px solid #eee'}}>
                                <input type="checkbox" onClick={(e) => this.shopSelectAll(e,index)}  checked={ this.state.item[index].allSelect?'checked':''}/>
                                <i className='iconfont icon-dianpuguanli1'
                                   style={{color: '#7f4395', margin: '0 5px'}}></i>
                                <span style={{color: '#7f4395', marginRight: '10px',width:'70%',overflow:'hidden'}}>{item.shopName}</span>
                                <i className='iconfont icon-iconfont'></i>
                                <span style={{float: 'right'}} onClick={(e) => this.isShowOperate(e,index,this.state.item[index].thisShopGoods)}>{this.state.item[index].completeOrEdit?'完成':'编辑'}</span>
                            </div>
                            {
                                item.thisShopGoods.map((goods,index2)=><div style={{overflow: 'hidden', height: '100px', padding: '12px 0' ,borderBottom:'1px solid #f2f2f2'}} key={ index2 }>
                                    <div style={{float: 'left', height: '100%', lineHeight: '72px'}}>
                                        <input type="checkbox" checked={this.state.item[index].thisStates[index2]||this.state.item[index].allSelect ? 'checked' : ''} onClick={ (e)=>this.selectSome(e,index,index2) } onChange={e=>this.isGoodsAllSelect(e,index) }/>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        <div style={{width: '72px', float: 'left', border: '1px solid #eee', margin: '0 10px'}}>
                                            <a href={ goods.url }><img src={goods.pic} style={{width: '100%'}}/></a>
                                        </div>
                                        <div style={{float: 'left', position: 'relative',height:'88px'}}>
                                            <a href={ goods.url } style={{ color:'gray' }}>
                                                <h3 style={{
                                                    width: '220px',
                                                    overflow: 'hidden',
                                                    fontSize: '12px'
                                                }}>{goods.name}</h3>
                                            </a>
                                            <div style={{padding: '10px 0'}}>
                                                <p>{goods.goodsAll}</p>
                                                <div style={{ marginBottom:'5px'}}>
                                                    <span style={{ marginRight:'10px'}}>{goods.size}</span>
                                                    <span>{goods.color}</span>
                                                </div>
                                                <span style={{marginRight: '10px',color:'#f33'}}>￥{goods.price}</span>
                                                <span >x {goods.sum}</span>

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
                                            }} onClick={(e) => this.minItem(e,index, index2)}>-</span>
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
                                                    }} onClick={(e) => this.addItem(e,index, index2)}>+</span>
                                                </div>
                                                <div style={{
                                                    float: 'right',
                                                    background: '#f33',
                                                    color: '#fff',
                                                    width: '50px',
                                                    height: '98px',
                                                    textAlign: 'center',
                                                    position: 'absolute',
                                                    right: '-30px',
                                                    top:'-11px',
                                                    lineHeight:'98px'
                                                }} onClick={(e) => this.setDeleteState(e,index,index2) }>
                                                    <i className='iconfont icon-guanbi'></i>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        position:'absolute',
                                        left:'0',
                                        top:'0',
                                        zIndex:'99',
                                        background:'rgba(127,127,127,0.6)',
                                        width:'375px',
                                        height:'667px',
                                        display:this.state.item[index].deleteState[index2]?'block':'none',
                                    }}>
                                        <div style={{
                                            // display:'block',
                                            background:'#fff',
                                            width:'170px',
                                            position:'absolute',
                                            left:'50%',
                                            top:'50%',
                                            transform:'translate(-50%,-50%)',
                                            textAlign:'center',
                                        }}>
                                            <div style={{ height:'30px',borderBottom:'1px solid gray'}}>
                                                <p style={{ height:'30px',lineHeight:'30px'}}>确定要删除该商品吗？</p>
                                            </div>
                                            <div style={{ height:'30px',lineHeight:'30px'}}>
                                                <span style={{ borderRight:'1px solid gray',width:'50%',display:'inline-block',height:'30px'}} onClick={ (e)=>this.cancleDelete(e,index,index2) }>取消</span>
                                                <span onClick={(e) => this.deleteItem(e,index,index2)} style={{ width:'50%' ,display:'inline-block',height:'30px'}}>确定</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        position:'absolute',
                                        left:'50%',
                                        top:'50%',
                                        transform:'translate(-50%,-50%)',
                                        width:'150px',
                                        height:'40px',
                                        background:'rgba(127,127,127,.6)',
                                        display:this.state.showToSelectGoods?'block':'none',
                                        textAlign:'center',
                                        lineHeight:'40px',
                                        zIndex:'9999',
                                        color:'#fff',
                                        borderRadius:'3px',
                                    }}>
                                        请选择要结算的商品
                                    </div>
                                </div>)
                            }
                        </li>)
                    }
                </ul>
                <div style={{ height:'50px',lineHeight:'50px',padding:'0 10px',position:'fixed',bottom:'50px',left:'0',background:'#fff',width:'100%' }}>
                    <div style={{ float:'left' }}>
                        <label><input type="checkbox" style={{ marginRight:'5px'}}  onClick={ this.allSelectY } checked={ this.state.sumAllSelect?'checked':''} />全选</label>
                    </div>
                    <div style={{ float:'right' }}>
                        <span>合计</span>
                        <span style={{ margin:'0 10px',color:'#f33'}}>￥{this.props.allPrice}</span>
                        <button style={{
                            color:'#fff',
                            background:"#f33",
                            border:0,
                            borderRadius:'5px',
                            padding:'0 18px',
                            height:'32px',
                            marginLeft:'5px'
                        }} onClick={ this.checkOut }>去结算</button>
                    </div>
                </div>
            </div>
        )
    }
})
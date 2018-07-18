import React,{ Component } from 'react';
import $ from 'jquery';
import './homeCommend_info.scss';

export default class homeCommend_info extends Component{
    constructor(props){
        super(props);
        this.state = {
            commendItem: [
            ],
            firstImgSrc: '',
            url: 'classify=girl&lei=qunzi',
            biao: 'girl',
        }
    }
    componentWillMount(){
        var self = this;
        var zarr = [];
        $.ajax({
            url: 'http://localhost:4000/home',
            data: this.state.url,
            success: function (results){
                // console.log(results); 
                results.forEach(function (item){
                    var firstImg = item.imgsrc1.split(',')[0];
                    zarr.push(firstImg);
                })
                self.setState({
                    firstImgSrc: zarr,
                    commendItem: results,
                })
            }
        });
        
    }

    render(){
        const { commendItem } = this.state;
        return (
            <div>
                <div style={{
                    textAlign:'center',
                    height:'48px',
                    fontSize:'16px',
                    lineHeight:'48px'
                }}>为你推荐</div>
                <ul style={{ overflow:'hidden'}}>
                    {
                        commendItem.map((item,index)=>
                            <li key={index} style={{
                                width:'50%',
                                border:'1px solid #f4f4f4',
                                borderRight:'none',
                                borderBottom:'none',
                                float:'left',
                                paddingBottom:'20px'
                            }}>
                                <a href={'http://localhost:3000/detail?classify='+this.state.biao+'&id='+item.id+'&ku='+item.brand} style={{ color:'gray',fontSize:'20px' }}>
                                    <div>
                                        <img src={ this.state.firstImgSrc[index] } style={{ width:'100%'}}/>
                                    </div>
                                    <dl style={{ padding:'0 20px'}}>
                                        <dd style={{
                                            fontSize:'.24rem',
                                            color:'#BF9E6B',
                                            background:'rgba(214,185,140,.2)',
                                            borderRadius:'.02rem'
                                        }}>{item.brand}</dd>
                                        <dd className="nameBox" style={{ fontSize:'.26rem',marginTop:'.2rem' }}>{item.name}</dd>
                                        <dd style={{ marginTop:'.24rem',color:'#F7A701',fontSize:'.28rem' }}>{item.price}</dd>
                                    </dl>
                                </a>
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}
import React,{ Component } from 'react';
export default class homeOperate_g extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:[
                
                {
                    name:'热销榜单',
                    src:'https://bfs.biyao.com/group1/M00/3E/ED/rBACW1srrAaAO3M-AAACHEN9ScQ870.png',
                    biao:'man',
                    sort: 'tshirt',
                },
                {
                    name:'花漾女神',
                    src:'https://bfs.biyao.com/group1/M00/3D/DF/rBACVFsw9MCAHV7xAAAKQ54JbXs007.png',
                    biao:'girl',
                    sort: 'lyq',
                },
                {
                    name:'家有萌娃',
                    src:'https://bfs.biyao.com/group1/M00/3D/C5/rBACVFswgUiAdJX8AAAL1IlWBDw353.png',
                    biao:'girl',
                    sort: 'yfz',
                },
                {
                    name:'运动日常',
                    src:'https://bfs.biyao.com/group1/M00/3F/CF/rBACW1sy5MOAFnk4AAAI_cU2Q7Y959.png',
                    biao:'shoes',
                    sort: 'xiuxian',
                },
            ]
        }
    }
    // {
    //     name:'每日上新',
    //     src:'https://bfs.biyao.com/group1/M00/3E/E5/rBACYVsrq4iAbn6gAAAEq9frm8c881.png'
    // },
    render(){
        const { item } = this.state;
        return(
            <div style={{ display:'flex' }}>
                <a style={{
                        display:'flex',
                        flexDirection:'column',
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                        height:'84px'
                    }}>
                    <img src="https://bfs.biyao.com/group1/M00/3E/E5/rBACYVsrq4iAbn6gAAAEq9frm8c881.png" style={{ width:'24px',marginBottom:'3px'}}/>
                    <p style={{ fontSize:'.24rem',color:'gray'}}>每日上新</p>
                </a>
                {
                    item.map((item,index)=><a href={'http://localhost:3000/fenleilist?'+'biao='+item.biao+'&sort='+item.sort+'&name='+item.name} key={ index } style={{
                        display:'flex',
                        flexDirection:'column',
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                        height:'84px'
                    }}>
                        <img src={ item.src } style={{ width:'24px',marginBottom:'3px'}}/>
                        <p style={{ fontSize:'.24rem',color:'gray'}}>{ item.name }</p></a>)
                }
            </div>
        )
    }
}
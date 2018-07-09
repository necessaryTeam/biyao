import React,{ Component } from 'react';
export default class homeOperate_g extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:[
                {
                    name:'每日上新',
                    src:'https://bfs.biyao.com/group1/M00/3E/E5/rBACYVsrq4iAbn6gAAAEq9frm8c881.png'
                },
                {
                    name:'热销榜单',
                    src:'https://bfs.biyao.com/group1/M00/3E/ED/rBACW1srrAaAO3M-AAACHEN9ScQ870.png'
                },
                {
                    name:'花漾女神',
                    src:'https://bfs.biyao.com/group1/M00/3D/DF/rBACVFsw9MCAHV7xAAAKQ54JbXs007.png'
                },
                {
                    name:'家有萌娃',
                    src:'https://bfs.biyao.com/group1/M00/3D/C5/rBACVFswgUiAdJX8AAAL1IlWBDw353.png'
                },
                {
                    name:'运动日常',
                    src:'https://bfs.biyao.com/group1/M00/3F/CF/rBACW1sy5MOAFnk4AAAI_cU2Q7Y959.png'
                },
            ]
        }
    }
    render(){
        const { item } = this.state;
        return(
            <ul style={{ display:'flex' }}>
                {
                    item.map((item,index)=><li key={ index } style={{
                        display:'flex',
                        flexDirection:'column',
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                        height:'84px'
                    }}>
                        <img src={ item.src } style={{ width:'24px',marginBottom:'3px'}}/>
                        <a style={{ fontSize:'.24rem',color:'gray'}}>{ item.name }</a></li>)
                }
            </ul>
        )
    }
}
import { makeStyles } from '@mui/styles';

export const HomeStyle = makeStyles({
  textFieldContainer:{
    '& .css-nnbavb':{width:'auto'},
    
  },
  tabContainer:{
    // backgroundColor:'red',
    
        '& .Mui-selected':{
          color:'black !important'
        },
        '& .MuiTabs-indicator':{
          backgroundColor:'#C4C664'
        }
    
  },
   
      btnC:{
          border:'2px solid black !important'
      },
      Sform:{
          
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
      },
      fm_lb:{
          float:'left',
          marginTop:'15px',
      },
      card_btn: {
        textTransform:"none !important",
        '&:hover': {
          color: 'white',
      },
      
        // margin:'14px 0px 0px 0px !important',
        width:'100%',
        marginTop:'15px !important',
        },
        card_btn1: {
          textTransform:"none !important",
          '&:hover': {
            color: 'green',
            
        },
        
        marginTop:'8px !important',
        
          },
        tab_btn: {
          textTransform:"none !important",
          
        
          // margin:'14px 0px 0px 0px !important',
          
          },
        
        card1: {
          textAlign:'center',
          color:'green',
          
          },
      formSelect:{
        fontWeight: '200 !important',
      },
      cit :{
    width: '100%' ,
    height: '15vw',
    
},
l1: {
  width: '50%',
  textAlign: 'center', 
  borderBottom:'1px solid gray', 
  lineHeight:'0.1em',
  margin:'10px 0 20px',
} ,

l2 :{ 
   background:'#fff',
   color:'green',
   padding:'0 10px', 
},

order:{
      border:'1px solid #FF9F24',
      borderRadius: '50%',
      float:'right',height:'30px',
      width:'30px',
      alignItems:'center',
      justifyContent:'center',
      display:'flex',
    },
    checkText:{
      '& .MuiTypography-root':{
        fontSize:'13px'
      }
  },
bordergrid:{
  border:'1px solid',
  borderRadius:'8px',
  padding:'4px',
 

},
hover:{
  '& :hover a':{
    color: 'white',
   
  }
  
}

});



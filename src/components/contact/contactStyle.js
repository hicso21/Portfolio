const style = {

  anchor: {
    display: 'flex',
    justifyContent: 'center'
  },

  desktop:{
    
    box: {
      background: 'radial-gradient(circle, rgb(17, 113, 239), rgb(17, 205, 239))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#fff'
    },

    title:{
      fontSize: '4vw',
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0px',
    },

    btnContainer:{
      width:'80%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: '30px'
    },

    input: {
      border: '1px solid #CBD5E0',
      borderRadius: '0.375rem',
      width: '100%',
      height: '2.5rem',
      paddingInline: '1rem'
    },

    textarea: {
      border: '1px solid #CBD5E0',
      borderRadius: '0.375rem',
      width: '100%',
      height: '6rem',
      paddingInline: '1rem',
      paddingTop: '8px'
    }
    
  },

  mobile: {
    
    box: {
      background: 'radial-gradient(circle, rgb(17, 113, 239), rgb(17, 205, 239))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#fff'
    },

    title:{
      fontSize: '35px',
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0px',
    },

    btnContainer:{
      width:'80%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: '30px'
    }

  }

}

export default style
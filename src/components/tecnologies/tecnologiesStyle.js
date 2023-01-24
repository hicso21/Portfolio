const style = {

  desktop: {
    
    box: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },

    leftBox: {
      height: '50%',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center'
    },

    rightBox: {
      height: '50%',
      padding: '75px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '58px'
      // gridTemplateRows: '1fr 1fr 1fr',
      // gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },

    iconDiv: {
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    imgCont: {
      width: '75px',
      height: '75px',
      borderRadius: '500px',
      boxShadow: '5px 10px 20px 6px rgba(0,0,0,0.26)',
      display:'flex',
      justifyContent: 'center',
      alignItems:'center'
    },

    tooltip: {
      width: '10%'
    },

    img:{
      width: '50%',
      height: '50%',
      objectFit: 'scale-down'
    },

  },

  mobile: {

    box: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },

    leftBox: {
      height: '50%',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center'
    },

    rightBox: {
      height: '50%',
      padding: '40px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px'
    },

    iconDiv: {
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    imgCont: {
      width: '50px',
      height: '50px',
      borderRadius: '500px',
      boxShadow: '2px 10px 10px 3px rgba(0,0,0,0.26)',
      display:'flex',
      justifyContent: 'center',
      alignItems:'center'
    },

    tooltip: {
      width: '10%'
    },

    img:{
      width: '50%',
      height: '50%',
      objectFit: 'scale-down'
    },

  }
    
}

export default style
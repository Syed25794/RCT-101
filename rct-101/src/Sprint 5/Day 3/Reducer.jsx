const Reducer=(state,action)=>{
    switch(action.type){
        case "HANDLE_LOGIN":{
            return{
                ...state,
                isAuth:true,
                token:action.token
            }
        }
        case "HANDLE_LOGOUT":{
            return{
                ...state,
                isAuth:false,
                token:"ABCD"
            }
        }
        default :{
            return state;
        }
    }
}

export default Reducer;
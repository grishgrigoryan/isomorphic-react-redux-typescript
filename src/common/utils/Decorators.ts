export  function actions(actionCreators: Function[]) {
    return function (target) {
        target['needs'] = actionCreators;
        target.prototype.componentDidMount = function () {
            if(!window['serverRendered']){
                actionCreators.map((actionCreator)=>{
                    this.props.dispatch(actionCreator(this.props.params));
                })
            }
        };
    }
}
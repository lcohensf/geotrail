({
    doInit : function(component, event) {
        console.log("in doInit");
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
          component.set("v.accounts", a.getReturnValue()); 
          console.log("got list of accounts back: " + a.getReturnValue);
        });
        $A.enqueueAction(action);
    }
})

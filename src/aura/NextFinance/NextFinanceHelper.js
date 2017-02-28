({
    getNextFinance: function(component, recID) {
        var spinner = component.find('spinner');
        $A.util.removeClass(spinner, "slds-hide");
        
        if (recID) {
            var action = component.get("c.getNextFinance");
            action.setParams({
                "recordId": recID
            });
        } else {
            
        }
        action.setCallback(this, function(response) {
            this.doLayout(response, component);
        });
        $A.enqueueAction(action);
    },
    
    doLayout: function(response, component) {
        var data = JSON.parse(response.getReturnValue());
        var warning = component.find('warning');
        if (data.error) {
            component.set("v.errorMessage", data.error);            
            $A.util.removeClass(warning, 'slds-hide');
        } else {
            $A.util.addClass(warning, 'slds-hide');
        }
        
        component.set("v.customerInteractionLevel", data.customerInteractionLevel);
        component.set("v.lastCallResolutionIndex", data.lastCallResolutionIndex);
        component.set("v.commentsAggregation", data.commentsAggregation);
        
        //assign the proper background color for the customer interaction level, noOfAgentCalls
        var noOfAgentCalls = component.find('noOfAgentCalls');
        $A.util.removeClass(noOfAgentCalls, "slds-theme--shade");
                
        if (data.customerInteractionLevel.noOfAgentCalls > 9){
            $A.util.addClass(noOfAgentCalls, 'traffic-red');
        }
        else if (data.customerInteractionLevel.noOfAgentCalls > 5){
            $A.util.addClass(noOfAgentCalls, 'traffic-yellow');
        }
        else {
            $A.util.addClass(noOfAgentCalls, 'traffic-green');
        }
        
        //assign the proper background color for the number of days since last call resolution, noOfDays
        var noOfDays = component.find('noOfDays');
        $A.util.removeClass(noOfDays, "slds-theme--shade");
                
        if (data.lastCallResolutionIndex.noOfDays > 9){
            $A.util.addClass(noOfDays, 'traffic-green');
        }
        else if (data.lastCallResolutionIndex.noOfDays > 4){
            $A.util.addClass(noOfDays, 'traffic-yellow');
        }
        else {
            $A.util.addClass(noOfDays, 'traffic-red');
        }
        
        console.log("The Data: ", data);
        var spinner = component.find('spinner');
        $A.util.addClass(spinner, "slds-hide");
    }
})
({
    doInit : function(component, event, helper) {
        var recID = component.get("v.recordId");
        //remove this later - used only for testing...
        recID='123';
        if (recID) {
            helper.getNextFinance(component, recID);
        } else {
           
        }
    }
})
({
    doInit : function(component, event, helper) {
        var recID = component.get("v.recordId");
        var caseID = component.get("v.vCaseId");

		//console.log("CaseID" + caseID);
		//console.log("this is a test" + recID);
        //Add logic here to pass in the correct ID based on whether caseID is populated via the VF page or if the Lightning component is getting the recordId from the component itself in LEX
        recID = caseID;
        //console.log("this is a test 2" + recID);
        if (recID) {
            helper.getNextFinance(component, recID);
        } else {
        }
    }
})
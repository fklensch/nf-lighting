public class NextFinance {
	 @AuraEnabled
    public static String getNextFinance (Id recordid) {
        //would want to add a method for getting account details using soql query from record id
        //callout here...
        //hardcoding response for demo purposes
        String resultList = '{"loyaltyIndex":-1,"customerInteractionLevel": {"noOfAgentCalls": 0,"lastFiveAgentCallDates": ""},'+
            '"lastCallResolutionIndex": {"noOfDays": 2,"lastAgentCall": "","beforeLastAgentCall": ""},'+
            '"commentsAggregation": {"agent": {"dueDate": 0,"extension": 2,"address": 0,"pmtMade": 1,"pmtDiscussed": 0,"payoff": 0,"website": 0,"contract": 0,"title": 0},'+
            '"vru": {"pmtMade": 2,"payoff": 0},'+
            '"website": {"pmtMade": 0,"payoff": 1}}}';
        return resultList;   
    }
}
import ConditionChecker from './ConditionChecker';

const MechanismList = [
    {
        text: 'Medical Furlough',
        conditions: [[
            ConditionChecker.eligibleForMedicalFurlough,
            ConditionChecker.isNotExcludedOffense
        ]]
    },
    {
        text: 'Electronic Monitoring or Home Detention',
        conditions: [
            [
                ConditionChecker.isOver55,
                ConditionChecker.sentenceLessThanYear,
                ConditionChecker.oneQuarterServed,
                ConditionChecker.isNotExcludedOffense,
            ],
            [
                ConditionChecker.convictedOfClassOffense,
                ConditionChecker.isNotExcludedOffense
            ]
        ]
    }];

export default class Mechanisms {
    static compute(data) {
        var out = MechanismList.map((mechanism) => {
            var out = {};
            out.text = mechanism.text;
            out.conditions = mechanism.conditions.map((conditionList) => {
                return conditionList.map((condition) => {
                    return condition(data)
                })
            });
            for (var i=0; i<out.conditions.length; i++) {
                out.passed = true;
                for (var j=0; j<out.conditions[i].length; j++) {
                    if (!out.conditions[i][j].passed) {
                        out.passed = false;
                        
                        break;
                    }
                }
                if (out.passed === true) {
                    break;
                }
            }
            return out;
        });
        return out;
    }
}
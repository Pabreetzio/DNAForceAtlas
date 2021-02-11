export class Sample{
    displayName: string = '';
    testGuid: string = '';
    constructor(sample?: Sample){
        if(sample !== undefined){
            this.displayName = sample.displayName;
            this.testGuid = sample.testGuid;
        }
    }
}
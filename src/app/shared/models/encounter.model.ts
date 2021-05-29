export class Encounter{
    firebaseId: string;
    resourceType?: string | null;
    text?: string | null;
    identifier?: string[] | null;
    status: string;
    statusHistory?: StatusHistory[] | null;
    class: string;
    classHistory?: ClassHistory[] | null;
    type?: string[] | null;
    serviceType?: string | null;
    priority?: string | null;
    subject?: string | null;
    episodeOfCare?: string[] | null;
    basedOn?: string[] | null;
    participant?: Participant[] | null;
    appointment?: string[] | null;
    period?: Period | null;
    length?: Duration | null;
    reasonCode?: string[] | null;
    reasonReference?: string[] | null;
    diagnosis?: Diagnosis[] | null;
    account?: string[] | null;
    hospitalization?: Hospitalization | null;
    location?: Location[] | null;
    serviceProvider?: string | null;
    partOf?: string | null;

    constructor(_firebaseId: string, _status: string, _class: string){
        this.firebaseId = _firebaseId;
        this.status = _status;
        this.class = _class;
        this.resourceType = null;
        this.text = null;
        this.identifier= null;
        this.statusHistory= null;
        this.classHistory= null;
        this.type= null;
        this.serviceType= null;
        this.priority= null;
        this.subject= null;
        this.episodeOfCare= null;
        this.basedOn= null;
        this.participant= null;
        this.appointment= null;
        this.period= null;
        this.length= null;
        this.reasonCode= null;
        this.reasonReference= null;
        this.diagnosis= null;
        this.account= null;
        this.hospitalization= null;
        this.location= null;
        this.serviceProvider= null;
        this.partOf= null;
    }
}

export interface Location {
    location: string,
    status?: "planned" | "active" | "reserved" | "completed",
    physicalType?: string,
    period?: Period,
}

export interface Diagnosis {
    condition: string,
    use: string,
    rank: Number,
}

export interface ClassHistory {
    class: string,
    period: Period,
}

export interface StatusHistory {
    status: "planned" | "arrived" | "triaged" | "in-progress" | "onleave" | "finished" | "cancelled" | "entered-in-error" | "unknown",
    period: Period,
}

export interface Participant {
    type?: string[],
    period?: Period,
    individual: string,
}

export interface Hospitalization {
    preAdmissionIdentifier?: string,
    origin?: string,
    admitSource?: string,
    reAdmission?: string,
    dietPreference?: string[],
    specialCourtesy?: string[],
    specialArrangement?: string[],
    destination?: string,
    dischargeDisposition?: string,
}

export interface Duration {
    value: Number,
    unit: string,
    system: string,
    code: string
}

export interface Period {
    start?: string,
    end?: string,
}
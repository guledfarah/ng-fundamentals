import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "..";

@Component({
    selector:'create-session',
    templateUrl: 'create-session.component.html',
    styles:[
        `
        em {float:right; color:#E05C65; padding-left: 10px}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error :ms-input-placeholder {color: #999;}
        `
      ]
})

export class CreateSessionComponent implements OnInit {


    //Send form data to parent component to be saved under the selected event
    @Output() saveNewSessionEventEmitter = new EventEmitter()
    //send cancel event to parent
    @Output() cancelNewSessionEventEmitter = new EventEmitter()

    newSessionForm: FormGroup

    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl



    constructor() { }


    ngOnInit(): void {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWordValidator, this.restrictedWordsValidator(['bar', 'pip'])])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    private restrictedWordValidator (control:FormControl):{[key: string] : any}{
        return control.value.includes('foo') ? {'restrictedWord': 'foo'} : null
    }

    private restrictedWordsValidator (words){
        return (control : FormControl) : {[key: string] : any} => {

            if(!words) return null

            var invalidWords = words.map(word => control.value.includes(word) ? word : null).filter(word => word != null)

            return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null


        }
    }

    saveSession(formValues) {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }

        this.saveNewSessionEventEmitter.emit(session)
    }

    cancel(){
        this.cancelNewSessionEventEmitter.emit()
    }

}
import { lang } from 'moment';

export class GlobalConstants {
    private static langMap: Map<string, string>;
    static THEMES = [
        {name: 'Chrome', value: 'chrome'},
        {name: 'Eclipse', value: 'eclipse'},
        {name: 'Github', value: 'github'},
        {name: 'XCode', value: 'xcode'},
        {name: 'Dracula', value: 'dracula'},
        {name: 'Monokai', value: 'monokai'},
        {name: 'Twilight', value: 'twilight'},
    ];
    static LANGUAGES = [
        {name: 'Java', value: 'java'},
        {name: 'Python 3.8', value: 'python'},
        {name: 'C', value: 'c'},
        {name: 'C++', value: 'cpp'},
    ];
    static get langModes(){
        if(this.langMap != null){
            return this.langMap; 
        }
        const langMap = new Map<string,string>();
        langMap['java'] = 'java';
        langMap['python'] = 'python';
        langMap['c'] = 'c_cpp';
        langMap['cpp'] = 'c_cpp';
        this.langMap = langMap;
        return langMap;
    }
}

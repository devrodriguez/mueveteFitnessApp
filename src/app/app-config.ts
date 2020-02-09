import { environment } from 'src/environments/environment';

export class AppConfig {
    private host: string = "localhost";
    private port: string = ':8000';

    public apiUrl: string;

    constructor() {
        if(environment.production) {
            this.host = 'api.muevetefitness.com.co';
            this.port = '';
            this.apiUrl = `https://${this.host}${this.port}`;
        } else {
            this.apiUrl = `http://${this.host}${this.port}`;
        }
    }
}
export class CommentBlock {

public Header: string;
public ContenuPrincipal: string;
public InteractionSociale: string;

    constructor (header: string, contenuPrincipal: string, interactionSocial: string){
        this.Header = header;
        this.ContenuPrincipal = contenuPrincipal;
        this.InteractionSociale = interactionSocial;
    }
}

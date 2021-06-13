export interface Emails {
    correos:   Correo[];
    paginator: Paginator;
}

export interface Correo {
    _id:          string;
    destinatario: string;
    asunto:       string;
    nombre:       string;
    msg:          string;
    fecha:        Date;
}

export interface Paginator {
    total:       number;
    perPage:     number;
    totalPages:  number;
    currentPage: number;
    slNo:        number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prev:        null;
    next:        number;
}

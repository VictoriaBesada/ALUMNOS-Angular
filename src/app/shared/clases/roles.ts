export class Roles {
    constructor(
        public id: number,
        public nombre: string,
        public active: boolean = false
    ) { }


    public static getRoles(): Roles[] {
        return [
            new Roles(1, 'admin'),
            new Roles(2, 'estudiante'),

        ];
    }


    public static getStudentRole(): Roles {
        return new Roles(2, 'estudiante');
    }

    public static getAdminRole(): Roles {
        return new Roles(1, 'admin');
    }

    public static getRandomRole(): Roles {
        let roles = Roles.getRoles();
        return roles[Math.floor(Math.random() * roles.length)];
    }

    public static getRoleName(id: number): string {
        let roles = Roles.getRoles();
        let rol = roles[id - 1];
        return rol?.nombre;
    }

}

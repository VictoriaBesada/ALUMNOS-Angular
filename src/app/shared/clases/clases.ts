export class Clases {

    public static getRole(): number {
        let rol: number = parseInt(sessionStorage.getItem("rol")!)
        if (rol == null) {
            rol = 9999;
        }
        return rol;
    }

    public static getId(): number {
        let id: number = parseInt(sessionStorage.getItem("id")!)
        if (id == null) {
            id = 0;
        }
        return id;
    }

}
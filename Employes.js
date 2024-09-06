class Employes {
  createEmp(employe) {
    this.nom = employe.nom;
    this.prenom = employe.prenom;
    this.email = employe.email;
    this.poste = employe.poste;
    this.dateEmbauche = employe.dateEmbauche;
    this.statut = employe.statut;

    console.log(
      `Employe: ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche}, ${this.statut} a été crée avec succès`
    );
  }

  getEmp() {
    return {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      poste: this.poste,
      dateEmbauche: this.dateEmbauche,
      statut: this.statut,
    };
  }

  editEmp(newEmploye) {
    this.nom = newEmploye.nom;
    this.prenom = newEmploye.prenom;
    this.email = newEmploye.email;
    this.poste = newEmploye.poste;
    this.dateEmbauche = newEmploye.dateEmbauche;
    this.statut = newEmploye.statut;

    console.log(
      `Employe: ${this.nom}, ${this.prenom}, ${this.email}, ${this.poste}, ${this.dateEmbauche}, ${this.statut} a été mise à jour`
    );
  }

  dropEmp() {
    this.dateEmbauche = null;
    console.log("Employée a été supprimée");
  }
}

export { Employes };
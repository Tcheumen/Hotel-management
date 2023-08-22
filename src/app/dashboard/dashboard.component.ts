import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  /*
  hotelTasks: string[] = [
    'Vérifier les réservations du jour',
    'Préparer les chambres pour les nouveaux arrivants',
    'Mettre à jour les disponibilités sur le calendrier',
    'Répondre aux demandes des clients',
    'Effectuer l inventaire des fournitures'
  ];

  addTask() {
    const newTask = prompt('Nouvelle tâche :');
    if (newTask) {
      this.hotelTasks.push(newTask);
    }
  }  */

  rooms = [
    { id: 1, name: 'Chambre 1', type: 'Simple' },
    { id: 2, name: 'Chambre 2', type: 'Double' },
    { id: 3, name: 'Chambre 3', type: 'Suite' },
  ];
  router: any;

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}

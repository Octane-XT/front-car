import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const AnnonceTable = ({ annonces, onValider, onRefuser }) => {
    const [first, setFirst] = useState(0);
    const [rows] = useState(15);
    const [globalFilter, setGlobalFilter] = useState(null);

    const getStatusSeverity = (status) => {
        switch (status) {
            case 0:
                return 'info';
            case 1:
                return 'success';
            default:
                return '';
        }
    };

    const getStatusName = (status) => {
        switch (status) {
            case 0:
                return 'Non vendu';
            case 1:
                return 'Vendu';
            default:
                return '';
        }
    };

    const getEtatSeverity = (status) => {
        switch (status) {
            case 0:
                return 'warning';
            case 1:
                return 'success';
            default:
                return '';
        }
    };

    const getEtatName = (status) => {
        switch (status) {
            case 0:
                return 'Non valide';
            case 1:
                return 'Valide';
            default:
                return '';
        }
    };

    const headerTemplate = (
        <div className="p-d-flex p-ai-center">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
            </span>
        </div>
    );

    return (
        <div>
            <div className="container mt-4" style={{ width: '1280px', margin: 'auto' }}>
                <DataTable value={annonces} first={first} rows={rows} paginator={true} onPage={(e) => setFirst(e.first)}
                    globalFilter={globalFilter}
                    header={headerTemplate}
                >
                    <Column field="modele.nommodel" header="Modele" filter filterPlaceholder="Search by Modele" />
                    <Column field="modele.marque.nommarque" header="Marque" />
                    <Column field="kilometrage" header="Kilometrage" />
                    <Column field="moteur.nom" header="Moteur" />
                    <Column field="prix" header="Prix" />
                    <Column field="etat" header="Etat" body={(rowData) => <span className={`p-tag p-tag-${getEtatSeverity(rowData.etat)}`}>{getEtatName(rowData.etat)}</span>} />
                    <Column field="statut" header="Statut" body={(rowData) => <span className={`p-tag p-tag-${getStatusSeverity(rowData.statut)}`}>{getStatusName(rowData.statut)}</span>} />
                    <Column field="date" header="Date" />
                </DataTable>
            </div>
        </div>
    );
};

export default AnnonceTable;

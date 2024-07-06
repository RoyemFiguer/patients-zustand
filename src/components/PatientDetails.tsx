import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import {usePatientStore} from '../store'

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient}: PatientDetailsProps) {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    //It can also be done this way
    //const {deletePatient, getPatientById} = usePatientStore()

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem
            label="ID"
            data={patient.id}
        />

        <PatientDetailItem
            label="Nombre"
            data={patient.name}
        />

        <PatientDetailItem
            label="Propietario"
            data={patient.caretaker}
        />

        <PatientDetailItem
            label="Email"
            data={patient.email}
        />

        <PatientDetailItem
            label="Fecha Alta"
            data={patient.date.toString()}
        />

        <PatientDetailItem
            label="Síntomas"
            data={patient.symptoms}
        />

        <div className="flex justify-between gap-3 mt-10">
            <button
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => getPatientById(patient.id)}
            >
                Editar
            </button>

            <button
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={() => deletePatient(patient.id)}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

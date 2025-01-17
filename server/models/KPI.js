import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

const Schema = mongoose.Schema;

const KPISchema = new Schema();

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;

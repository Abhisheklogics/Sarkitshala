import mongoose from "mongoose";

const jetsonSchema = new mongoose.Schema({
    ExperimentID: {
        type: Number,
    },
    TName:{
        type: String,
    },
    Disc1:{
        type: String,
    },
    Disc2:{
        type: String,
    },
    Compreq:{
        type: Array,
    },
    ST1:{
        type: Array,
    },
    
    ST2:{
        type: String,
    },

    ST3:{
        type: String,
    },

    Disc:{
        type: String,
    },

    JNDkit:{
        type: Array,
    },

    ST4:{
        type: String,
    },

    J_SDK:{
        type: Array,
    },

    ST5:{
        type: String,
    },

    PS_Options:{
        type: Array,
    },

    ST6:{
        type: String,
    },

    CS_Options:{
        type: Array,
    },

    ST7:{
        type: String,
    },

    CE_Options: {
        type: Array,
    },

    ST8: {
        type: String,
    },

    ST9: {
        type: String,
    },

    App_Options:{
        type: Array,
    },

    ST10:{
        type: String,
    },

    EndV:{
        type: String,
    },
    ST11:{
        type: String,
    },
    GS_Steps:{
        type: Array,
    },

    ST12:{
        type: String,
    },

    ST13:{
        type: String,
    },

    SDdisc:{
        type: Array,
    },

    ST14:{
        type: String,
    },

    MusbDisc:{
        type: Array,
    },

    ST15:{
        type: String,
    },
    Note:{
        type: Array,
    },

    ST16:{
        type: String,
    },

    Mdata:{
        type: String,
    },

    SDsteps:{
        type: Array,
    },

    ST17A:{
        type: String,
    },
    
    Formatsdcard:{
        type: String,
    },

    FSteps:{
        type: Array,
    },

    Write_Image:{
        type: String,
    },

    Write_Steps:{
        type: Array,
    },

    ST17B:{
        type: String,
    },

    Mac:{
        type: String,
    },

    Etcherinfo:{
        type: String,
    },

    EtcherSteps:{
        type: Array,
    },

    CLI:{
        type: String,
    },

    CLIS:{
        type: Array,
    },

    ST17C:{
        type: String,
    },

    LinuxM:{
        type: Array,
    },

    ELI:{
        type: String,
    },

    EL_S:{
        type: Array,
    },

    CLI_Linus:{
        type: String,
    },

    
    CLI_S:{
        type: Array,
    },
    
    Setup1stboot:{
        type: String,
    },
    
    SetupDesc:{
        type: String,
    },
    
    SetupOptions:{
        type: Array,
    },
    
    Setup_Steps:{
        type: Array,
    },
    
    FBoot:{
        type: String,
    },

    FB_Desc:{
        type: String,
    },

    Initial_Setup:{
        type: Array,
    },

    ST:{
        type: String,
    },

    ST_Desc: {
        type: String,
    },

    InitialSHM:{
        type: String,
    },

    Desc:{
        type: Array,
    },

    S_Steps:{
        type: String,
    },

    Steps:{
        type: Array,
    },

    ST18:{
        type: String,
    },

    Conc_Bpoint: {
        type: Array,
    },

}
)

export const Jetson = mongoose.models.Jetson || mongoose.model('Jetson', jetsonSchema);
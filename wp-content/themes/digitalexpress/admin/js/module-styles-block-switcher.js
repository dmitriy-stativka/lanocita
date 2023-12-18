const { select, subscribe, dispatch } = wp.data;

class DSModuleStylesBlockSwitcher {
    constructor() {
        this.blockCount = null;
        this.initBlocks = select('core/blocks').getBlockTypes();
    }

    init() {
        subscribe(() => {
            const editor = select('core/editor');
            if (editor === undefined) {
                return;
            }

            let currBlockCount = select('core/block-editor').getBlockCount()
            if (this.blockCount === null) {
                this.blockCount = currBlockCount;
            }

            if (this.blockCount === currBlockCount) {
                return;
            }
            this.blockCount = currBlockCount;
            this.changeAllowedBlocks();
        });
    }

    changeAllowedBlocks() {
        let allowedBlocks = [];
        let editorSettings = select('core/editor').getEditorSettings();

        if (this.blockCount === 0) {
            this.initBlocks.forEach((blockType) => {
                if (-1 !== blockType.name.indexOf('acf')) {
                    allowedBlocks.push(blockType);
                }
            });
        }

        //important! need to use editorSettings.allowedBlockTypes initial array/object-array
        editorSettings.allowedBlockTypes.splice( 0, editorSettings.allowedBlockTypes.length );
        allowedBlocks?.forEach((blockType) => {
            editorSettings.allowedBlockTypes.push(blockType.name);
        });

        dispatch('core/editor').updateEditorSettings(editorSettings); //set allowed types
        dispatch('core/blocks').addBlockTypes(allowedBlocks); //set blocks
        dispatch('core/edit-post').setIsInserterOpened(false); //close block selector
    }
}

wp.domReady(function () {
    new DSModuleStylesBlockSwitcher().init();
})
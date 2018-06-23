import { NgModule } from '@angular/core';

import { EnotaryGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EnotaryGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EnotaryGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EnotaryGatewaySharedCommonModule {}

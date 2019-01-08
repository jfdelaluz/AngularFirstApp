import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {
  constructor(private serversService: ServersService) {}

  resolve(
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+activatedRoute.params['id']);
  }
}

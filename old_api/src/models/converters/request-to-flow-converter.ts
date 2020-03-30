import { IConverter } from '../../interfaces';
import { Flow } from '@common/models/flow';
import { injectable } from 'inversify';

@injectable()
export class RequestToFlowConverter implements IConverter<any, Flow> {
  Convert(input: any): Flow {
    if (!input || !input.body) {
      throw new Error("Argument error");
    }

    let body = input.body;
    let pathParameters = input.pathParameters;
    let id = pathParameters?.id || 0;

    let result: Flow = {
      id: id,
      metadata: body.metadata,
      stages: body.stages
    }

    return result;
  }
}